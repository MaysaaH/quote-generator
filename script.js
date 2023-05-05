const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');




const showLoadingSpinner = () => {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

const hideLoadingSpinner = () => {
  quoteContainer.hidden = false;
  loader.hidden = true;
}
// Show new quote
const newQuote = () => {
  showLoadingSpinner();
  // Pick a random quote from apiQuotes array
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  // check if Auhtor field is blank and replace it with 'Unknown'
  if(!quote.author) {
    authorText.textContent = 'Unknown';
  } else {
    authorText.textContent = quote.author;
  }
  //check the Quote length to determine styling
  if (quote.text.length > 120) {
    quoteText.classList.add('long-quote');
    } else {
      quoteText.classList.remove('long-quote');
    }
  
  quoteText.textContent = quote.text;
  hideLoadingSpinner();
}


// Tweet a quote
const tweetQuote = () =>{
  const twittertUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twittertUrl, '_blank');
}
//Event listener
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

newQuote();
