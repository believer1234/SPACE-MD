require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAKG4H1vDfvloUQQAAG0HAAAKAAAAY3JlZHMuanNvbpVUW5OiOBT+L3nFGlREwKquGsAbV1HUFrbmIULAyNUQoHHK*z5F9*T0bNXubC9PIUmd853vku8gL3CFDNSB2XdQEtxAivol7UoEZkCpowgRMAAhpBDMgGXBleYE0tLf641d2sOJvcQJt1l4qd862fay52g5tob7xfAJPAagrM8pDv5Q0Evd0mXN1OTsWndj9njPX8KVIV7so*uSO9CPctk0uaVxb5*Ao68IMcF5vCgvKEMEpgbqHIjJ5+AHSri44Winp5m4YBhNudJbsNsEKwYpGxXFc65L7NuYUbn4c*DXRG*NLJk0m7ON9INgMN3l1CXPu2UTSrbn7TmFjVkGdvnkDX6F4xyFWohyimn3ad7Hlt7x6ywvGidVyWQv7vR4K7oiasozpff9QYiryk4z67j9HPDM9bpcW5xo6qMrY0n7beOR1eXU+NXFvM6PXsagztqbDvc34A5590ryf3gfzl2zURDrkJK35Ga64R0hH+EVI1*X7WkssKkjByS53pfa5+Av8qt+285dXhkzN*2E2TIS2kW79LjhVoOURMGuvJVucrwXH*AhrcmfUIqouhmKE5i5oZb2XHOZsXqN5wePWCMDcav9EGeH9bneasL04CtRnvKjSIAa73utWredb6M7K294xTP5+GUZ1SirVfnpdaIEdVoIZqPHABAU44oSSHGR93tjbgBg2LgoIIi+sgt8ntEkLb2P9AUnjC9EX+vknlhYFDwpNk8yrpybD9eSWWhPYABKUgSoqlC4xhUtSGehqoIxqsDsr28DkKMX+qZb340bDUCESUUPeV2mBQzfRX0*hEFQ1Dl1uzxQ+wUiYDb82EaU4jyuehrrHJLgghukXiCtwCyCaYV+DYgICsGMkhr9Cq1ahD3v1nbtOyvDAgOQveqBw97iHMdL3FiaimN+xn+tvrR9VViWX3JEwQCkr7dGw6kkSNOJxImiwAkz*mu***iFry8XIgpxWoEZUM1nUyi264WOb0PxsFrJi1hWYxl8zPPuizfiO0vEY*Z+WpSuq3KSnTwbXmRZ0rHk5Jthe*Jld1e7XCrG4tM*FOlN1NoFN2Xwwa6ShLBj1z1pxNg8jxglvW7qds1kJtVENyqlc8WxR8U*R+lLw20mQ7nqzje2OyeltPSD03ystsFw1Aiu2j713ULU4AD93iyv0mP+vDlf*WK7tq3Tqrb3vOjSUN+IRb2e7PPKWgY7Q63ZUdQyEeutpANxzgudO1vbui72ywQ+73z*RqR4Al+Kw6ZUtm+OfU1M+vOlwq9m6pXqfyOMXoOfw16**1TuDXfvr+Fj8FuJny*Jv6RRCa6ORhtx9GIckpiye3+Js*V97hxh2Br4+ixrh6CtShbaDXg8vg1AmUIaFSQDMwDzkBQ4BANAiro3rJZHxR+aqXKsvQ+eworKHyHY4wxVFGYlmI0EfjoVR*xw+HbLIUW5htWlVyLjlHNv6E4uS5dC+h4pIPefRRLw+AFQSwECFAMUAAAICAChuB9bw375aFEEAABtBwAACgAAAAAAAAAAAAAApIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAAB5BAAAAAA=',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '233593296825',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'believer1234',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 87654321,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
