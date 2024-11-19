import pactum from "../../pactumConfig.js";
import createUserSchema from "../schemas/user/createUser.js";
import { generateUserPayload } from "../support/generateAccount.js";
import messages from "../support/messages.js";

describe("Create Account - API 11", () => {
  it("should create a new account and return correct response", async () => {
    const requestBody = generateUserPayload();
    const response = await pactum
      .spec()
      .post("/createAccount")
      .withForm(requestBody)
      .expectJson(messages.CREATE_USER_SUCCESS)
      .returns();
      createUserSchema.validate(response, { abortEarly: false });
  });

  it("should return error when email is missing", async () => {
    const requestBody = generateUserPayload();
    delete requestBody.email;
    const response = await pactum
      .spec()
      .post("/createAccount")
      .withForm(requestBody)
      .expectJson(messages.CREATE_USER_MISSING_EMAIL)
      .returns();
  });

  it("should return error for invalid email format", async () => {
    const requestBody = generateUserPayload();
    requestBody.email = "invalid-email";
    await pactum
      .spec()
      .post("/createAccount")
      .withForm(requestBody)
      .expectJson(messages.CREATE_USER_INVALID_EMAIL)
      .returns()
  });
});
