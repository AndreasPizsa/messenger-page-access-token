module.exports = {
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
}
