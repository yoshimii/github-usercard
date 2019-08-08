window.addEventListener('load', function (){/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/yoshimii
*/
axios.get("https://api.github.com/users/yoshimii")
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

  .then( (response)=>{
    this.console.log(response);
      let newUser = UserCard(response);
      entryPoint.appendChild(newUser);
    
    // this.console.log(response.data.name);
  })
  .catch((err) => {
    this.console.log(err);
  })

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

function UserCard(user) {
  const newCard = document.createElement('div');
  newCard.classList.add('card');

    const newImage = document.createElement('img');
    newImage.classList.add('user-image');
    newImage.src = user.data.avatar_url;
    // newImage.style.objectFit = "scale";

    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');

      const name = document.createElement('h3');
      name.classList.add('name');
      name.textContent = user.data.name;

     const userName = document.createElement('p');
      userName.classList.add('username');
      userName.textContent = user.data.login; 

      const location = document.createElement('p');
      location.textContent = user.data.location;

      const profile = document.createElement('p');
      profile.textContent = "Profile:";
        
        const github = document.createElement('a');
        github.src = user.data.url;
    
      const followers = document.createElement('p');
      followers.textContent = `Followers: ${user.data.followers}`;//insert follower number
      
      const following = document.createElement('p');
      following.textContent = `Following: ${user.data.following}`;

      const bio = document.createElement('p');;
      bio.textContent = `Bio: ${user.data.bio}`;

  newCard.appendChild(newImage);
  newCard.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(github);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
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
    let follower = UserCard(response);
    entryPoint.appendChild(follower);
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


