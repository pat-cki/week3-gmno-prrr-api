function chooseCatOptions() {
  event.preventDefault();
  let stranChecked = [];
  let stranFriendliness = document.getElementsByName("stranger-friendly");
  for (let i = 0; i < stranFriendliness.length; i++) {
    if (stranFriendliness[i].checked == true) {
      stranChecked.push(stranFriendliness[i].value);
    }
  }
  let energyChecked = [];
  let energyLevel = document.getElementsByName("energy");
  for (let i = 0; i < energyLevel.length; i++) {
    if (energyLevel[i].checked == true) {
      energyChecked.push(energyLevel[i].value);
    }
  }
  let childrenChecked = [];
  let childrenFriendliness = document.getElementsByName("children");
  for (let i = 0; i < childrenFriendliness.length; i++) {
    if (childrenFriendliness[i].checked == true) {
      childrenChecked.push(childrenFriendliness[i].value);
    }
  }

  let stranNum = Number(stranChecked)
  let energyNum = Number(energyChecked)
  let childrenNum = Number(childrenChecked)

  let xhr = new XMLHttpRequest();
  let url = "https://api.thecatapi.com/v1/breeds/";
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let catObj = JSON.parse(xhr.responseText);
      console.log(catObj);
      let allCats = []
      console.log("this is", catObj[0])
      console.log("this is", stranNum)

      for (let i = 0; i < catObj.length; i++) {
        if (catObj[i].stranger_friendly == stranNum &&
          catObj[i].energy_level == energyNum &&
          catObj[i].child_friendly == childrenNum) {
          allCats.push(catObj[i].name)
        }
      }

      let catDescri = []
      let catDesc = document.querySelector('#cat_description');

      if (allCats.length == 0) {
        allCats.push("Stray Cat");
        catDescri.push("The stray cat is the most precious of all the cats! You may not have a home but that's because the world is your home. You are one of a kind!");
        catDesc.innerText = catDescri[0];
      }

      let randomCat = allCats[Math.floor(Math.random() * allCats.length)]
      getGiphy(randomCat)
      console.log("this is", randomCat)
      let catDescription = [];

      for (let i = 0; i < catObj.length; i++) {
        if (catObj[i].name == randomCat) {
          catDescription.push(catObj[i].description)
          catDesc.textContent = catDescription[0];
        }
      }

      const inputName = document.getElementById('name').value;
      let humanName = document.getElementById('human_name');
      humanName.textContent = "Hey " + inputName + "! You are a " + randomCat;
    }
  }
  xhr.open("GET", url, true);
  xhr.send();
}


// Giphy API

let getGiphy = function(name) {
  let xhr = new XMLHttpRequest();
  let url = `https://api.giphy.com/v1/gifs/search?api_key=AKBayfz9FpPmrLSc5ScLLJx9BOzj2gaF&q=${name}+cat&limit=2`;
  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        let giphyObj = JSON.parse(xhr.responseText);
        console.log(giphyObj);
        let gifDrop = document.querySelector(".question__mark");
        console.log(gifDrop);
        let link = giphyObj.data[0].images.downsized_medium.url;
        gifDrop.src = link;
        console.log(link);
      }
  };
  xhr.open("GET", url, true);
  xhr.send();
};
  
//UI VARIABLES
const inputName = document.getElementById('name').value;

