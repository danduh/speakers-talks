export const environment = {
  production: false,
  mongoURL: process.env.MONOG_URL || 'localhost:27017',
  // TODO <Should to be moved to env var>
  SECRET_KEY: 'dsadalkjshdakljhd32u32rjh'
};
