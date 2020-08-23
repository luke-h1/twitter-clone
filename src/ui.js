class UI { 
  constructor(){
    this.tweet = document.querySelector('#tweet') 
    this.titleInput = document.querySelector('#title');  
    this.bodyInput = document.querySelector('#body');  
    this.idInput = document.querySelector('#id');   
    this.tweetSubmit = document.querySelector('.tweet-submit') 
    this.forstate = 'add';  
  }

  showTweets(tweets){
    let output = ''; 
    tweets.forEach((tweet) => { 
      output += `
      <div class="card mbg-3"> 
        <div class="card-body"> 
          <h4 class="card-title">${tweet.title}</h4> 
          <p class="card-text">${tweet.body}</h4> 
          <a href="#" class="edit card-link" data-id="${tweet.id}"> 
          <i class="fa fa-pencil"></i> 
          </a> 
          <a href="#" class="delete card-link" data-id="${tweet.id}"> 
          <i class="fa fa-remove"></i> 
          </a>  
          </div> 
          </div> 
      `; 
    }); 
    this.tweet.innerHTML = output;
  }
}

export const ui = new UI();