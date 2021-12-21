module.exports = {
  enabled: process.env.HUGO_ENVIRONMENT == 'production' || false,
  content: [
    './layouts/**/*.html',
  ],
  options: {
    safelist: [],
  }
}