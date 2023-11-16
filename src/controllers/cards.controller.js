const {selectCards} = require("../models/cards.model")

exports.getCards = (request, response, next) => {
    selectCards().then((cards) => {
        response.status(200).send(cards)
    })
    .catch(next)
}