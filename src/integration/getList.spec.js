import pactum from "../../pactumConfig.js";
import productsListSchema from "../schemas/products/getList.js";

describe("Get All Products List - API 1", () => {
  it("should return status code 200 for /api/productsList", async () => {
    const response = await pactum
      .spec()
      .get("/productsList")
      .expectStatus(200)
      .returns();
    productsListSchema.validate(response, { abortEarly: false });
  });
});
