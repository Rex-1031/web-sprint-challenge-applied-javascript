// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.

const axiosPromise = axios.get(" https://lambda-times-api.herokuapp.com/articles")
                            .then((res) =>{
                                const newArticles = articleCards(res.data.articles)
                                    cardsContainer.appendChild(newArticles);  
                                
                                
                                console.log(res.data.articles);
                            })
                            .catch((err)=>{
                                debugger
                                console.log(err, "Error")
                            })

console.log(axiosPromise);


// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

function articleCards  (article){
    const divCard = document.createElement('div');
    divCard.classList.add('card');

    const headlineDiv = document.createElement('div');
    headlineDiv.classList.add('headline')
    headlineDiv.textContent = article.headline

    const authorDiv = document.createElement('div');
    authorDiv.classList.add('author')

    const imgDiv = document.createElement('div');
    imgDiv.classList.add('img-container')

    const authorImg = document.createElement('img');
    authorImg.src = article.authorPhoto

    const authorSpan = document.createElement('span');
    authorSpan.textContent = `By: ${article.authorName}`

    

    imgDiv.appendChild(authorImg);
    imgDiv.appendChild(authorImg);
    

    
    authorDiv.appendChild(imgDiv)
    
    authorDiv.appendChild(authorSpan);

    headlineDiv.appendChild(authorDiv)

    divCard.appendChild(headlineDiv);

    return divCard;

}

const cardsContainer = document.querySelector('.cards-container');