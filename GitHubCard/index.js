window.addEventListener('load', function (){/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/yoshimii
*/
// axios.get("https://api.github.com/users/yoshimii")
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

  // .then( (response)=>{
  //   this.console.log(response);
  //     let newUser = UserCard(response.data.avatar_url, response.data.name, response.data.bio);
  //     entryPoint.appendChild(newUser);
    
  //   this.console.log(response.data.name);
  // })
  // .catch((err) => {
  //   this.console.log(err);
  // })

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

function UserCard(userImage, userName, userBio) {
  const newCard = document.createElement('div');
  newCard.classList.add('user-card');

  const newImage = document.createElement('img');
  newImage.classList.add('user-image');
  newImage.src = userImage;

  const name = document.createElement('h2');
  name.classList.add('user-name');
  name.textContent = userName;

  const about = document.createElement('p');
  about.classList.add('user-bio');
  about.textContent = userBio;

  newCard.appendChild(newImage);
  newCard.appendChild(name);
  newCard.appendChild(about)
  return newCard;
}


let entryPoint= document.querySelector('.cards');
/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ["zmughal", "briannakeune", "sethnadu", "MSquared88", "deegrams221"];

followersArray.forEach( item => {
  axios.get(`https://api.github.com/users/${item}`)

  .then( (response) => {
    // UserCard(response);
    this.console.log(response);
  })

  .catch((err) => {
    this.console.log(err);
  })
})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
})


