import { faker } from '@faker-js/faker';


function generateData() {
  const data = [];

  for (let i = 1; i <= 500; i++) {
    data.push({
      id: i,
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      address: `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.country()}`,
      phone: faker.phone.number(),
      content: faker.lorem.sentences(2),
      status: faker.datatype.boolean()
    });
  }
  return JSON.stringify(data);
}

export {generateData};

export interface Data {
  id: number;
  first_name: string;
  last_name: string;
  address: string;
  phone: string;
  content: string
  status: boolean
}