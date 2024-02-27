const namee = "Cristi";
const surname = "Socaci";
const fullName = namee + " " + surname;

console.log("Length", fullName.length);

console.log("toLowerCase", fullName.toLowerCase());
console.log("toUpperCase", fullName.toUpperCase());

console.log("indexOf", fullName.indexOf("i"));
console.log("indexOf", fullName.indexOf("rist"));
console.log("indexOf", fullName.indexOf("rit"));

console.log("includes", fullName.includes("rist"));
console.log("includes", fullName.includes("rit"));

console.log("endsWith", fullName.endsWith("aci"));
console.log("endsWith", fullName.endsWith("ai"));

console.log("replace", fullName.replace("i", "a"));
console.log("replace", fullName.replaceAll("i", "a"));

const fullNameSliced = fullName.slice(1, fullName.length);
console.log("slice", fullNameSliced);
