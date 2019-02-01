const fs = require('fs')
const path = require('path')
const util = require('util')

const request = require('request-promise-native')

const readFile = util.promisify(fs.readFile)

async function run () {
  // Improve this function by rewriting it to use async/await.
  // The "Done!" message should appear last.

  readFile(path.resolve(__dirname, 'test.json'))
    .then((contents) => {
      const urls = JSON.parse(contents)

      for (const url of urls) {
        request(url)
          .then((html) => console.log(html.substring(0, 100)))
      }
    })
}

run()
  .then(() => console.log('Done!'))
  .catch((error) => console.error(error))
