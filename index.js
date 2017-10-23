const _ = {
  get: require('lodash.get'),
  set: require('lodash.set'),
  isString: require('lodash.isstring')
}

/**
 * sets the receiving page's Page Access Token.
 *
 * This is for your convenience so that you can use your bot from different
 * Facebook pages.
 *
 * It sets `context.messenger.recipient.pageAccessToken` to the [Page Access
 * Token]
 * (https://developers.facebook.com/docs/messenger-platform/guides/quick-start#get_page_access_token)
 * of the page specified in `context.messenger.pageId`
 *
 * @param  {Object|String}   pageAccessTokens an object with page ids as
 *                           property names and their respective Page Access
 *                           values token as values or a string that will always
 *                           be used
 * @return {function}        a middleware function to be used with
 *                           `messenger-core`
 */
module.exports = PageAccessTokens

function PageAccessTokens(pageAccessTokens) {
  const getToken = _.isString(pageAccessTokens)
    ? pageAccessTokenFunctionFromString(pageAccessTokens)
    : pageAccessTokenFromHash

  return async function(message, context) {
    const pageAccessToken = getToken(message, context)
    if (!pageAccessToken) {
      const pageId = getPageId(message, context)
      if (context.log)
        context.log.warn({ pageId }, 'no page access token found for page')
    }
    _.set(context, 'messenger.recipient.pageAccessToken', pageAccessToken)
  }

  function pageAccessTokenFunctionFromString(pageAccessToken) {
    if (/^[a-z0-9_]{1,64}$/i.test(pageAccessToken)) {
      pageAccessToken = process.env[pageAccessToken]
    }

    return function() {
      return pageAccessToken
    }
  }

  function pageAccessTokenFromHash(message, context) {
    const pageId = getPageId(message, context)
    const pageAccessToken = _.get(pageAccessTokens, pageId)
    return pageAccessToken
  }

  function getPageId(message, context) {
    return (
      _.get(context, 'messenger.pageId') ||
      _.get(context, 'messenger.recipient.id') ||
      _.get(message, 'recipient.id')
    )
  }
}
