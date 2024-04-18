import { logSomething, CRISTI_NAME } from "./test.js";
import mainFunction from "test.js";

const validator = require("validator");

// import validator from "validator";

console.log(CRISTI_NAME);

console.log(validator.isEmail("cristi@marius.com"));
