require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIANyxH1uITy*xiQQAAPQHAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3rVGOSmYERHDDcRb4AKLb2xDyWUWsrNqgLFCf99g7Z7uiNmdraXpyIpMs*JPHl+gLzAFE1RA4Y*QElwDRlqj6wpERgCvdrtEAFdkEAGwRAosyiZ8T5TBDGyLX5xqRal0ukcMdrgMAptnwh0ld7QMnSewL0Lymqb4vgPCRcJHFc+LgzzUs8CyRjb4o16c52fMXNldsK5JWt87wiRfnoC9zYjxATne6s8oAwRmE5R40FMvgZfs6XDkrfw5hZfWVgpPa5AeHdNru6tyXHJNbRuOHdtSWHxNfhb4ZprxnVieR5jh4jt1HN*61AHhmhWSKdbkE8O*kvfJkb0gE*xPkeJk6CcYdZ8ue*aePVc6oQ6nWBVhi4+ZnMt8idiMHFhqF*xsQlm0QZFnBB*DTgXFqsx6+*KjTCvstXKqk8q2VbP3FQcXYPndDFFbiNrZ3SIPwP3yLtWTv+n79Btana2NJgsdXEuOfZh0LdTeuyp22fUp8q+gMWFn8WDzeVr8I3n9XF99gW3YKSOtNRgIudMPH3Bwr2q3YL4YnDxzhMy2*mAD1lF*oQyti6iInHu6bl*XHgvmdNTdXcTPePryD8vzIqIymwpKEIkGjMzqzZLfdU7j*WzN5nkQl37mcqvxk1neZQifeym7jYcL3X*6ZXRCTVOAob8vQsI2mPKCGS4yNuYIAldAJN6hWKC2Gt7QbBV19sylqqOue3RvhkcCHSokDiaoFsDezSA57h*NnznEjyBLihJESNKUTLGlBWkmSNK4R5RMPzrdVItaYKygqEJTsAQCKIoi5I66CmK9J1+uxwgo7Asv+WIgS7YkSKbIzBkpEJd8PjBNAVFFizTkgVek0VBV60RLxkjweJNXuZbitmj6BpniDKYlWDID+R+f6BIav*+dxfk6Moe+mlZi3wX7DChLMirMi1g8i6u948wjosqZ6smj432gAgYfgojxnC+py2zKockPuAaGS0PMNzBlKKfjUYEJe9c3szDKJJ2*psX1fNGngFa7G2iX3ozlH*tTvp6S1YHA3HAS*xA4vn+UP7ehu8*4bXZEsQgTmmr1slMkCNnZC2qVU8JbFuz9pqx18AHnXd5Psa*n*ayGjduJathD6a39a2Z6CQ6ca6ywmy9u6S+nhjWVvOVp98kAUNgN8JiieKmMDnuxSk3RkdV95deLY+m8Op5leSum1E9ZRlRJXGRKXMxvAipd7LEdSOJvnCeD1xuREdsnFlkK57PVI30y1NbLUE1jtHnYmtjJU+lm3lC04CHyUt0i8yeZlecp9jyLVCo2DnvuSWl+2yUvMTKXPeaQX1rEv3QN1M9SbejnbYch1zFTdxcPsxSXja0x+K8Lm76Zpj4TdL49XWH0av*5LAd338O7oG7lVfv3v2U4s3Q*sUU9MhgEyLRI6l2YWKXcU9RsA+FiXerrYIEojIJtI1*sC+WB+6tzssUsl1Bstb38oQUOAFdQIqq1auT74o*2ZoWOOabY6SQMu1jB363VtLjlkeKcgzpAQxBnon6ttVzo5XlikH2vlFAa5+JjcH9H1BLAQIUAxQAAAgIANyxH1uITy*xiQQAAPQHAAAKAAAAAAAAAAAAAACkgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAALEEAAAAAA==',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '233534970884',
  
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
