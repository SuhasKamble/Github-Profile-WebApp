const profileContainer = document.querySelector('.profile-container');
const search = document.getElementById('search');
const searchBtn = document.getElementById("searchBtn");

getProfile("SuhasKamble");
searchBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    const name = search.value;
    if(name){
        getProfile(name)
        
    }else{
        alert("Please enter the username for search")
    }
})



async function getProfile(name){
   const res = await fetch(`https://api.github.com/users/${name}`);
   const resData = await res.json()
   console.log(resData);
   showProfile(resData);
}

function showProfile(profile){
  profileContainer.innerHTML = ""
    const profileEle = document.createElement('div');
    profileEle.classList.add('profile');
    profileEle.innerHTML =   `
 
    <div class="profile-left">
        <img src="${profile.avatar_url}" alt="">
    </div>
    <div class="profile-right">
        <h4>${profile.name}</h4>
        <p class="status">${profile.bio}</p>
        <div class="info-container">
         <p><span>${profile.following}</span> Following</p>
             <p><span>${profile.followers}</span> Followers</p>
        </div>
    </div>
    <a href="${profile.html_url}" class="visit-btn">Visit</a>

    
    `
    profileContainer.appendChild(profileEle);
}