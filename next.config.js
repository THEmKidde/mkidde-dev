module.exports = {
    images: {
      domains: ['i.imgur.com', 'media-exp1.licdn.com', 'www.adobe.com', 'i.ytimg.com'],
    },
    env: {
        FORM_URL: process.env.FORM_URL,
        SECRET_PASSPHRASE: process.env.SECRET_PASSPHRASE,
        LOGIN_USERNAME: process.env.LOGIN_USERNAME,
        LOGIN_PASSWORD: process.env.LOGIN_PASSWORD,
        AUTH_TOKEN: process.env.AUTH_TOKEN,
    }
  }