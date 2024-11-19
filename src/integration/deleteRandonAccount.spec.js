import pactum from "../../pactumConfig.js";
import deleteRandomAccountSchema from "../schemas/user/deleteRandomAccount.js";
import { faker } from "@faker-js/faker";
import messages from "../support/messages.js";

//Endpoint não funcionando da forma que deveria até o momento do desenvolvimento do script
describe("Delete Account - API 12", () => {
  it("should delete account and return correct response", async () => {
    const response = await pactum
      .spec()
      .delete("/deleteAccount")
      .withQueryParams("email", faker.internet.email())
      .withQueryParams("password", faker.internet.password())
      .expectStatus(200)
      .expectJson(messages.DELETE_ACCOUNT_SUCCESS)
      .returns();
    deleteRandomAccountSchema.validate(response, { abortEarly: false });
  });

  it("should return error when email is missing", async () => {
    const response = await pactum
      .spec()
      .delete("/deleteAccount")
      .withQueryParams("password", faker.internet.password())
      .expectJson(messages.DELETE_ACCOUNT_MISSING_EMAIL)
      .returns();
  });
});
