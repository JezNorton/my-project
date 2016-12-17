

// function buildPersonData(personData:any) {
//   return `${personData.firstName} ${personData.lastName} ${personData.address}`;
// }

// function buildPersonData({firstName, lastName}, address = ['']) {
//   return `${firstName} ${lastName} ${address}`;
// }

function buildPersonData({firstName, lastName}, ...address) {
  return `${firstName} ${lastName} ${address}`;
}

const partialAddress = ["Sedbrook Farm", "Litton Lane", "Hinton Blewett"];

const firstName = 'Jeremy',
  lastName = 'Norton',
  address = 'Sedbrook Farm';
const personData = {
  firstName,
  lastName
};

// const address2 = partialAddress.concat(['BS39 5AY'])
const address2 = [...partialAddress, 'BS39 5AY']

console.log(buildPersonData(personData, address2));

