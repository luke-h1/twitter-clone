import { http } from './http-lib';
import { ui } from './ui';

// GET TWEETS ON DOM LOAD
document.addEventListener('DOMContentLoaded', getTweets);

// LISTEN FOR SUBMIT
document.querySelector('.tweet-submit').addEventListener('click', submitTweet);

// LISTEN FOR DELETE
document.querySelector('#tweet').addEventListener('click', deleteTweet);


// GET TWEETS
function getTweets() {
  http
    .get('http://localhost:3000/tweets')
    .then((data) => ui.showTweets(data))
    .catch((err) => console.log(err));
}

// ADD TWEET
function submitTweet() {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;
  const data = {
    title,
    body,
  };
  // POST REQ
  http
    .post('http://localhost:3000/tweets', data)
    .then((data) => {
      ui.showAlert('tweet now added to db.json', 'alert alert-success');
      ui.clearFields();
      getTweets();
    })
    .catch((err) => console.log(err));
}

function deleteTweet() {}
