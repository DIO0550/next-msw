import { http, HttpResponse } from "msw";

const listApi = http.get("http://localhost:3030/user", () => {
  return HttpResponse.json({
    firstName: "Sarah",
    lastName: "Maverick",
  });
});

export const handlers = [listApi];
