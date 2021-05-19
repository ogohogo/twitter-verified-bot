# twitter-verified-bot
Bot that makes a tweet whenever someone gets verified on Twitter

**Please note that the way bot currently works will get you suspended for mass-mentioning. Use at your own risk.**

# How does it work?
It simply checks most recently followed users by account "verified".

# How to use it?
- Clone repo
- Install dependencies (`npm install`)
- Fill bot credentials in config.json
- Run bot using `npm start`

# Issues
- It can't handle multiple issues getting verified at the same time. So for example if user1, user2 and user3 gets verified at the same time, it might skip user1 and user2.
