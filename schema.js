const fs = require('fs');
const airtableSchema = require('airtable-schema');
const config = require('./config');

const { schema, baseId, email, password } = config;
async function initiate() {
  await airtableSchema({ baseId, email, password });
}
const getTables = jsonObj => {
  const arr = Object.keys(jsonObj);
  arr.forEach(table => {
    console.log(jsonObj[table].name);
  });
};
fs.access(schema, fs.F_OK, err => {
  if (err) {
    initiate();
  }
});
const schemaData = fs.readFile(schema, 'utf8', (err, jsonString) => {
  if (err) {
    console.log(err);
  }
  getTables(JSON.parse(jsonString));
});
