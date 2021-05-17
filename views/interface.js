window.addEventListener('DOMContentLoaded', () => {
  getHeadlines()
})

async function getHeadlines() {
  console.log('Page loaded')
  

  const guardianApi = 'https://content.guardianapis.com/search?section=news&order-by=newest&show-fields=all&api-key=test'
  const makersApi = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl='
  const newsApi = makersApi + guardianApi
 // makers API doesn't work for me, so I was using the guardian api with my own api key, i've added the test one here for now

  let guardianFetch = await fetch(guardianApi)
  let guardianResults = await guardianFetch.json()
  let guardianHeadlines = await guardianResults
  // console.log(guardianHeadlines)
  // console.log(guardianHeadlines.response.results)
  let headlinesArray = guardianHeadlines.response.results

  const listOfHeadlines = document.createElement('ul') 
  const listContainer = document.getElementById('listContainer')
  listContainer.appendChild(listOfHeadlines)
  // console.log(listContainer)

  headlinesArray.forEach(article => {
    const listElement = document.createElement('li')
    const pElement = document.createElement('p')

    listElement.appendChild(pElement)
    let thumbnail = article.fields.thumbnail
    let title = article.webTitle
    let articleLink = article.webUrl
    let summary = article.fields.trailText
    pElement.innerHTML = `<h2>${title}</h2><br><img src="${thumbnail}"><br>${summary}<br><a href=${articleLink}>View Full Article </a><br>`

    listOfHeadlines.appendChild(listElement)

  })

  

}

