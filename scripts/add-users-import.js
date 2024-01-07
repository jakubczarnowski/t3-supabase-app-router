// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs");
const filePath = "./drizzle/schema.ts";

// Read the file
fs.readFile(filePath, "utf8", function (error, data) {
  if (error) {
    return console.log(error);
  }

  // Modify the data
  let modifiedData = data + '\nimport { users } from "~/server/db/authSchema";';

  // Write the file back
  fs.writeFile(filePath, modifiedData, "utf8", function (err) {
    if (err) return console.log(err);
  });
});
