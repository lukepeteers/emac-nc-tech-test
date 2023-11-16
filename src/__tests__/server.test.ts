const request = require("supertest");
const app = require("../server.js")

describe('GET', () => {
  it('404 - responds with an error when given an endpoint that does not exist', () => {

    return request(app)
    .get('/nonesense')
    .expect(404)
    
  });

  it('404 - responds with an error when an endpoint is spelt incorrectly', () => {
    
    return request(app)
    .get('/kards')
    .expect(404)
  });

  describe('/cards', () => {
    it('200 - responds with an array of objects', () => {
    
      return request(app)
      .get('/cards')
      .expect(200)
      .then(({body}) => {

        expect(body).toEqual([
          {
            "title": "card 1 title",
            "imageUrl": "/front-cover-portrait-1.jpg",
            "card_id": "card001"
          },
          {
            "title": "card 2 title",
            "imageUrl": "/front-cover-portrait-2.jpg",
            "card_id": "card002"
          },
          {
            "title": "card 3 title",
            "imageUrl": "/front-cover-landscape.jpg",
            "card_id": "card003"
          }
        ])
      })
    });
  });
  


});