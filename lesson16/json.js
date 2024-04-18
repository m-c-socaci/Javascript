const package1 = {
  name: "lesson15",
  version: "1.0.0",
  description: "lesson 15",
  main: "index.js",
  scripts: {
    test: 'echo "Error: no test specified" && exit 1',
    start: "node index.js",
  },
  author: "cristi",
  license: "ISC",
  dependencies: {
    validator: "^13.11.0",
  },
};

console.log(package1);

const packageJson = JSON.stringify(package1);

console.log(packageJson);

console.log(typeof packageJson);

const packageJsonParsed = JSON.parse(packageJson);

console.log(packageJsonParsed);

console.log(typeof packageJsonParsed);

const invalidJson = "invalid json";
const validJson = `{"valid": "json"}`;
let failedToParse = null;

try {
  failedToParse = JSON.parse(invalidJson);
} catch {
  console.log("ERROR");
}

if (failedToParse !== null) {
  console.log(failedToParse);
}

console.log("It Works");
