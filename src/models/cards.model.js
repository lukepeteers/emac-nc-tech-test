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

exports.selectCardById = async (cardId) => {

    const cardsInfoJSON = await fs.readFile(`${__dirname}/../data/cards.json`, 'utf-8')
    const cardsInfoParsed = JSON.parse(cardsInfoJSON)

    const templatesJSON = await fs.readFile(`${__dirname}/../data/templates.json`)
    const templatesParsed = JSON.parse(templatesJSON)

    const cardInfoById = cardsInfoParsed.find((card) => {
        return card.id === cardId
    })

    const frontCoverInfo = cardInfoById.pages.find((element) => {
        return element.title === "Front Cover"
    })

    const templateInfo = templatesParsed.find((element) => {return element.id === frontCoverInfo.templateId})

    const availableSizesComplete = []

    cardInfoById.sizes.forEach((size) => {
        const availableSize = {}
        switch(size) {
            case 'sm':
                availableSize.id = 'sm'
                availableSize.title = 'Small'
                break;
            case 'md':
                availableSize.id = 'md'
                availableSize.title = 'Medium'
                break;
            case 'lg':
                availableSize.id = 'lg'
                availableSize.title = 'Large'
                break;
            case 'gt':
                availableSize.id = 'gt'
                availableSize.title = 'Giant'
                break;
        }
        availableSizesComplete.push(availableSize)
        
    })

    const completedCard = 
    {
        title: cardInfoById.title,
        imageUrl: templateInfo.imageUrl,
        card_id: cardId,
        base_price: cardInfoById.basePrice,
        availableSizes: availableSizesComplete,
        pages: cardInfoById.pages
      }

    return completedCard
      
}