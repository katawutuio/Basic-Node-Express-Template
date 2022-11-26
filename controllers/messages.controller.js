const path = require('path')

function getMessages(req, res) {
  res.sendFile(path.join(__dirname, '..', 'public', 'images', 'skimountain.jpeg'))
}

function postMessage(req, res) {
  console.log('Update message.')
}

module.exports = {
  getMessages,
  postMessage
}