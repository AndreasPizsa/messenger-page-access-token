const test = require('ava')
const randomatic = require('randomatic')

const _ = {
  get: require('lodash.get')
}

const PageTokenPlugin = require('../')
const FIXTURE = require('./fixtures')

test('it works with a string', async t => {
  const PAGE_ACCESS_TOKEN = randomatic('aA0', 182)
  const plugin = new PageTokenPlugin(PAGE_ACCESS_TOKEN)
  const context = {}
  await plugin(FIXTURE.entry[0].messaging[0], context)
  t.is(_.get(context, 'messenger.recipient.pageAccessToken'), PAGE_ACCESS_TOKEN)
})

test('it works with a string that’s the name of an ENV variable', async t => {
  const ENV_NAME = randomatic('aA0?', 32, { chars: '_' })
  const PAGE_ACCESS_TOKEN = randomatic('aA0', 182)
  process.env[ENV_NAME] = PAGE_ACCESS_TOKEN
  const plugin = new PageTokenPlugin(ENV_NAME)
  const context = {}
  await plugin(FIXTURE.entry[0].messaging[0], context)
  t.is(_.get(context, 'messenger.recipient.pageAccessToken'), PAGE_ACCESS_TOKEN)
})

test('it works with an object', async t => {
  const randomPageId = randomString()
  const PAGE_ACCESS_TOKENS = {
    [randomPageId]: randomString()
  }
  const plugin = new PageTokenPlugin(PAGE_ACCESS_TOKENS)
  const context = {}
  const message = FIXTURE.entry[0].messaging[0]

  message.recipient.id = randomPageId
  await plugin(message, context)
  t.is(
    _.get(context, 'messenger.recipient.pageAccessToken'),
    PAGE_ACCESS_TOKENS[randomPageId]
  )
})

test('it logs if no token can be found', async t => {
  let loggingCalled = false
  function markLogged() {
    loggingCalled = true
  }
  const plugin = new PageTokenPlugin({
    // empty
  })
  const message = FIXTURE.entry[0].messaging[0]
  const context = {
    log: {
      info: markLogged,
      warn: markLogged,
      error: markLogged,
      debug: markLogged
    }
  }
  await plugin(message, context)
  t.is(loggingCalled, true)
})

test('it doesn’t log if no logger is defined', t => {
  const plugin = new PageTokenPlugin({
    // empty
  })
  const context = {}
  const message = FIXTURE.entry[0].messaging[0]
  t.notThrows(() => plugin(message, context))
})

function randomString() {
  return Math.random()
    .toString(36)
    .substr(2)
}
