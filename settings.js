require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAHVMIltc2pRfVAQAAG8HAAAKAAAAY3JlZHMuanNvbpVVXY+iSBT9L*WqGUFEhKSTQURERVEUGzbzUELx0XxaVYA48b9P0Onp2WR3tpenoqice+455xbfQV7EBK1QC6TvoMRxDSnqlrQtEZDAtAoChEEf+JBCIIHWTI*hnleGe7gdlO662TRBnExTqIyCvd3Lrm6vRpyRDDX5Bdz7oKzOaez9AXDKmTGf55tXtJxrgctUSd3c+LqdNXs+16NanPLFJjFCTUlewL1DhDGO81AtI5QhDNMVak0Y48*RJ0qYt*Vbq3NHKswja3Fzbq3AltF8rlyZzcDKrlRbKSczbT5Hv7EHNq35gzgbrAXOZU8+K9petg4LeB7OcjxYwDz3vYjZq0*6JA5z5Os+ymlM20*rflm*DQaE8bxL4u1TbEYG50zUnX1wI5HLHBjiUTY*RGeS6J8jvo0c1yWbg78Sdr3l22F2PjT5zdGymm2uZhod9Co9HWrDPfyNuInfs5L8H90zY5ks5R2rNwdlVNIq3FXL40bW3zL*qInnkVZ7UbDZJKOh9zn6q2B+muiihY9qKIbuRYg8*koux215CSoUWJauJJyXnXzW+KAPaYX*xJKpdHe7v9DB8rURkiRW0CggaCoSHFaIDePKnu2W1bgq3dIWGGevKYsLDM0TH7buKp0Z59IWtNzyBCbxnFcU1OtSlZuXR0cJanUfSOy9DzAKY0IxpHGRP*ZGkz6Afm0hDyP6kBe0jlorgh1APB5WYSMIllW7s2k6ntiWp7zNk12bYtTcbqPjC+iDEhceIgT5i5jQArcGIgSGiADpr299kKMrfRrXlePYPghiTOgxr8q0gP67q+8foecVVU6tNveUboEwkJiPbURpnIek07HKIfaiuEZKBCkBUgBTgn51iDDygURxhX5NrVL4nfB7leWNvWmBPsgehsQ+kMCQ43ieHTMiM2Ik9iv50nSosCy*5IiCPkgfp1iW4ThOnPAcO5yMBIn92u3ff*Hr4HxEYZwSIAFl29vl40RVtwEzJEdNk9VQVkIZfPTzHoyn8OIqwmh4LMfWPmlWtxEfjZ1J7nkkZbhxMJaNhh348e52VNWXfwABEtDcaUp313G5NKLT0JjMPKOCI0Xc2Wuu4hXZibSFZfDDpR4YzusmEm8ijAbbpWccJ6Tdh5O9sJszjh1UgY4N2Yy04UUOX7pqPqpjD*1eLKC+aRvtEBVidlMVmqJ5Oa0um8ts7gTRmqzOSbu+UDGY27tes4lnlN3bs+RVMOmtuOma93qw14dhpNfuMTvxq9lAvc7kZ2QfI5P+vKriR5g6p7rXIEaPyc9h599*Ovfk3eWLufd*g*h5lfzbryGwCsjRdIWSxDUU0ts6KDOX3GK99De9vBfOjE3AOYnBTqfgfv*WB2UKaVDgDEgA5j4uYh*0AS6qLrB6HhR*KKbIjK6Gz8ZTSKj8MQSHOEOEwqwEEivw4wnDC5z4PGXiolxAEnUamKwTBV2iW7ksLQrp+0wBuXvmCgfuPwBQSwECFAMUAAAICAB1TCJbXNqUX1QEAABvBwAACgAAAAAAAAAAAAAApIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAAB8BAAAAAA=',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '233551609040',
  
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
