
const partialAddress = ["Sedbrook Farm", "Litton Lane", "Hinton Blewett"];
import { buildPersonData, BuildPersonDataType } from './buildPersonData';

const firstName = 'Jeremy',
    lastName = 'Norton',
    address = 'Sedbrook Farm';
const personData = {
    firstName,
    lastName
};

// const address2 = partialAddress.concat(['BS39 5AY'])
let address2: string[] = [...partialAddress, 'BS39 5AY']

console.log(buildPersonData(personData, ...address2));

