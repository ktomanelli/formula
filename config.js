require('dotenv').config();

const config = {
  schema: `./${process.env.AIRTABLE_BASE_ID}.json`,
  baseId: process.env.AIRTABLE_BASE_ID,
  email: process.env.AIRTABLE_EMAIL,
  password: process.env.AIRTABLE_PASSWORD,
  SLACK_TOKEN: process.env.SLACK_BOT_TOKEN,
  AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
};

module.exports = config;
