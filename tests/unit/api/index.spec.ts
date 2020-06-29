import { getActors } from "@/api";
import { ApiResponse } from "@/api/models/ApiRespose";
import "isomorphic-fetch";

let data: ApiResponse;
const currentPage = 5;

beforeAll(async (done) => {
  data = await getActors("", currentPage);
  done();
});

describe("getActors service", () => {
  it("Returns a pagination object", async () => {
    expect(data.pagination).toBeTruthy();
  });

  it("Returns a pagination object", async () => {
    expect(data.pagination).toBeTruthy();
  });

  it("Current page should be the expected", async () => {
    expect(data.pagination.currentPage).toBe(currentPage);
  });
});
