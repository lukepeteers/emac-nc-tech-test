const { selectCards, selectCardById } = require("../models/cards.model")

exports.getCards = (request, response, next) => {
    selectCards().then((cards) => {
        response.status(200).send(cards)
    })
    .catch(next)
}

exports.getCardById = (request, response, next) => {
    const {cardId} = request.params
    selectCardById(cardId).then((card) => {
        response.status(200).send(card)
    })
    .catch(next)
}