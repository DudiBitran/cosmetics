const { google } = require("googleapis");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const auth = new google.auth.GoogleAuth({
  keyFile: path.join(__dirname, "./../google-credentials.json"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const appendLead = async (lead) => {
  const client = await auth.getClient();
  const sheets = google.sheets({ version: "v4", auth: client });

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: process.env.SHEET_NAME,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[lead.name, `'${lead.phone}`, lead.createdAt]],
    },
  });
};

module.exports = { appendLead };
