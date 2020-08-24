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
      <div class="card mb-3"> 
      <i class="fa fa-twitter" aria-hidden="true"></i>

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

  showAlert(message, className){
    this.clearAlert(); 
    const div = document.createElement('div'); 
    div.className = className;  
    div.appendChild(document.createTextNode(message));  
    const container = document.querySelector('.TweetsContainer'); 
    const tweets = document.querySelector('#tweets') 
    container.insertBefore(div, tweets); 
    setTimeout(() => { 
      this.clearAlert(); 
    }, 2000);  
  } 
  clearAlert(){
    const currentAlert = document.querySelector('.alert'); 
    if(currentAlert){
      currentAlert.remove(); 
    }
  } 
  clearFields(){
    this.titleInput.value = '';  
    this.bodyInput.value = ''; 
  }
}

export const ui = new UI();