function chooseCatOptions() {
  event.preventDefault();
 
  let stranNum = Number(document.querySelector('[name="stranger-friendly"]:checked').value)
  
  let energyNum = Number(document.querySelector('[name="energy"]:checked').value)

  let childrenNum = Number(document.querySelector('[name="children"]:checked').value)
  
  console.log ("this is them", stranNum, energyNum, childrenNum)
  
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
        catDesc.textContent = catDescri[0];
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

