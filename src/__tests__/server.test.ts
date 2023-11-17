const request = require("supertest");
const app = require("../server.js");

describe("GET", () => {
  it("404 - responds with an error when given an endpoint that does not exist", () => {
    return request(app).get("/nonesense").expect(404);
  });

  it("404 - responds with an error when an endpoint is spelt incorrectly", () => {
    return request(app).get("/kards").expect(404);
  });
 
  describe("/cards", () => {
    it("200 - responds with an array of correctly appended objects", () => {
      return request(app)
        .get("/cards")
        .expect(200)
        .then(({ body }) => {
          expect(body).toEqual([
            {
              title: "card 1 title",
              imageUrl: "/front-cover-portrait-1.jpg",
              card_id: "card001",
            },
            {
              title: "card 2 title",
              imageUrl: "/front-cover-portrait-2.jpg",
              card_id: "card002",
            },
            {
              title: "card 3 title",
              imageUrl: "/front-cover-landscape.jpg",
              card_id: "card003",
            },
          ]);
        });
    });
  });
 
  describe("/cards/:cardId", () => {
    it("200 - responds with a correctly appended card object chosen by a passed cardId", () => {
      return request(app)
        .get("/cards/card003")
        .expect(200)
        .then(({ body }) => {
          expect(body).toEqual({
            title: "card 3 title",
            imageUrl: "/front-cover-landscape.jpg",
            card_id: "card003",
            base_price: 200,
            availableSizes: [
              {
                id: "md",
                title: "Medium",
              },
              { id: "lg", title: "Large" },
            ],
            pages: [
              {
                title: "Front Cover",
                templateId: "template006",
              },
              {
                title: "Inside Top",
                templateId: "template007",
              },
              {
                title: "Inside Bottom",
                templateId: "template007",
              },
              {
                title: "Back Cover",
                templateId: "template008",
              },
            ],
          });
        });
    });
  });
});
