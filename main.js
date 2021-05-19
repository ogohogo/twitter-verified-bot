/* All required packages */
const Twit = require("twit")
const fs = require("fs")

/* All required files */
const config = require("./config.json")
const localData = JSON.parse(fs.readFileSync("./data.json", "utf8"))

var T = new Twit(
  config.botCredentials
)

/* Twitter rate-limits allows us to call this endpoint 15 times / 15 minutes, that's 1 call / 1 minute. */
setInterval(() => {
    T.get('friends/list', { screen_name: 'verified' },  function (err, data, response) {

      //Don't do anything if there's any error
      if (err) return;

      //Don't do anything if info regarding last verified person has been tweeted.
      if (localData.lastVerified == data.users[0].screen_name) return;

      //Make a tweet regarding person getting verified on Twitter
      T.post('statuses/update', { status: `.@${data.users[0].screen_name} just got Verified on Twitter! Congratulations!` })
      
      //Save last verified person locally
      localData.lastVerified = data.users[0].screen_name
      fs.writeFileSync("./data.json", JSON.stringify(localData, null, 2))
  })
}, 60 * 1000)