import { faker } from '@faker-js/faker';

/**
 * Gera o corpo da requisição para criar uma conta de usuário.
 * Os dados incluem informações pessoais, endereço e dados de login.
 */
export function generateUserPayload() {
  return {
    name: faker.person.middleName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    title: faker.helpers.arrayElement(["Mr", "Mrs", "Miss"]),
    birth_date: faker.date.birthdate({ min: 18, max: 60, mode: "age" }).getDate(),
    birth_month: faker.date.birthdate({ min: 18, max: 60, mode: "age" }).getMonth() + 1,
    birth_year: faker.date.birthdate({ min: 18, max: 60, mode: "age" }).getFullYear(),
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    company: faker.company.name(),
    address1: faker.location.streetAddress(),
    address2: faker.location.secondaryAddress(),
    country: faker.location.country(),
    zipcode: faker.location.zipCode(),
    state: faker.location.state(),
    city: faker.location.city(),
    mobile_number: faker.phone.number(),
  };
}

export default generateUserPayload;
