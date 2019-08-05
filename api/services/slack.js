const { send, sendError, fetch } = require('../util/http')

module.exports = async (req, res) => {
  const name = req.query.name

  if (!name) {
    return sendError(res, new Error('no query given'))
  }

  try {
    const response = await fetch(
      `https://${encodeURIComponent(name)}.slack.com`
    )
    const availability = response.status !== 200
    send(res, availability)
  } catch (err) {
    if (err.code === 'ENOTFOUND') {
      send(res, true)
    } else {
      sendError(res, err)
    }
  }
}
