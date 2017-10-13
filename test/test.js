const test = require('ava');
const Core = require('messenger-core');
const _ = {
  get: require('lodash.get')
};

const PageTokenPlugin = require('../');

test('it works with a string', async t => {
  const PAGE_ACCESS_TOKEN = randomString();
  const plugin = PageTokenPlugin(PAGE_ACCESS_TOKEN);
  const context = {};
  await plugin(FIXTURE.entry[0].messaging[0], context);
  t.is(
    _.get(context, 'messenger.recipient.pageAccessToken'),
    PAGE_ACCESS_TOKEN
  );
});

test('it works with an object', async t => {
  const randomPageId = randomString();
  const PAGE_ACCESS_TOKENS = {
    [randomPageId]: randomString()
  };
  const plugin = PageTokenPlugin(PAGE_ACCESS_TOKENS);
  const context = {};
  const message = FIXTURE.entry[0].messaging[0];

  message.recipient.id = randomPageId;
  await plugin(message, context);
  t.is(
    _.get(context, 'messenger.recipient.pageAccessToken'),
    PAGE_ACCESS_TOKENS[randomPageId]
  );
});

test('it logs if no token can be found', async t => {
  let loggingCalled = false;
  function markLogged() {
    loggingCalled = true;
  }
  const plugin = PageTokenPlugin({
    // empty
  });
  const message = FIXTURE.entry[0].messaging[0];
  const context = {
    log: {
      info: markLogged,
      warn: markLogged,
      error: markLogged,
      debug: markLogged
    }
  };
  await plugin(message, context);
  t.is(loggingCalled, true);
});

const FIXTURE = {
  object: '<PSID>',
  entry: [
    {
      messaging: [
        {
          sender: {
            id: '<PSID>'
          },
          recipient: {
            id: '<PAGE_ID>'
          },
          timestamp: 1458692752478,
          message: {
            mid: 'mid.1457764197618:41d102a3e1ae206a38',
            text: 'hello, world!',
            quick_reply: {
              payload: '<DEVELOPER_DEFINED_PAYLOAD>'
            }
          }
        }
      ]
    }
  ]
};

function randomString() {
  return Math.random()
    .toString(36)
    .substr(2);
}
