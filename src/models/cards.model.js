const fs = require('fs/promises')

exports.selectCards = async () => {

    const cardsComplete = []

    const cardsInfoJSON = await fs.readFile(`${__dirname}/../data/cards.json`, 'utf-8')
    const cardsInfoParsed = JSON.parse(cardsInfoJSON)

    const templatesJSON = await fs.readFile(`${__dirname}/../data/templates.json`)
    const templatesParsed = JSON.parse(templatesJSON)

    cardsInfoParsed.forEach((card) => {

        const frontCoverInfo = card.pages.find((element) => {
            return element.title === "Front Cover"
        })

        const templateInfo = templatesParsed.find((element) => {return element.id === frontCoverInfo.templateId})

        const finishedCard = 
        {title: card.title,
        imageUrl: templateInfo.imageUrl,
        card_id: card.id}

        cardsComplete.push(finishedCard)
    })

    return cardsComplete
}