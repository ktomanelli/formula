require('dotenv').config();
const Airtable = require('airtable');

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);
base('Requests')
  .select({
    view: 'form',
  })
  .eachPage(async (records, nextpage) => {
    console.log(records[records.length - 1]);
  });
