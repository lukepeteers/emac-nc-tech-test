Hello to whoever is reading this.

I struggled to get the yarn commands to work so I instead used "npm test" for testing. 

Here I'm going to explain some of the choices I made, and what I would have done differently, given more time. 

TESTING

I was originally planning to do something along the lines of this for the testing: 

body.forEach((card) => {
          expect(card).toHaveProperty('title', expect.any(String))
          expect(card).toHaveProperty('imageUrl', expect.any(String))
          expect(card).toHaveProperty('card_id', expect.any(String))
        });

While this approach would dynamicly check the response has the correct properties, I am not sure of how to check for specific values using this method. So I decided to hard code the test to check for the outcome I knew each endpoint should return. I should have used a more incremental approach to my testing.

ERROR HANDLING

I feel I didn't run into any endpoints that required any specific error handling, but adding it would have made my code more extensible

ENDPOINTS

I focused most of my time figuring out the logic for these endpoints. Near the end I realized I had repeated lots of code and my cards.model was becoming quite messy. 

To combat this I could have handled the fs.readFile and parsing of that data inside of util functions that I would then call inside of my model when needed.



All in all it was a fun challenge and has pointed out some areas I need to work on. Thank you!
