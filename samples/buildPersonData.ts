interface PersonData {
  firstName: string,
  lastName: string
}

export type BuildPersonDataType = (personData: PersonData, address: string[]) => string;
export function buildPersonData(person: PersonData, ...address: string[]): string {
  return `${person.firstName} ${person.lastName} ${address}`;
}


