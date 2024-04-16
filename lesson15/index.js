import { logSomething, CRISTI_NAME } from "test.js";
import mainFunction from "test.js";

const validator = require("validator");

console.log("Hello node!");

console.log(validator.isEmail("cristi@marius.com"));
