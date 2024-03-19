/*
Make the code refactoring using forEach method and arrow functions.

*/

function printContactsInfo({ names, phones }) {
  const nameList = names.split(",");
  const phoneList = phones.split(",");
  for (let i = 0; i < nameList.length; i += 1) {
    console.log(`${nameList[i]}: ${phoneList[i]}`);
  }
}

printContactsInfo({
  names: "Jacob,William,Solomon,Artemis",
  phones: "89001234567,89001112233,890055566377,890055566300",
});

function printContactsInfoForEach({ names, phones }) {
  const nameList = names.split(",");
  const phoneList = phones.split(",");

  nameList.forEach((_, i) => {
    console.log(`${nameList[i]}: ${phoneList[i]}`);
  });
}

printContactsInfoForEach({
  names: "Jacob,William,Solomon,Artemis",
  phones: "89001234567,89001112233,890055566377,890055566300",
});
