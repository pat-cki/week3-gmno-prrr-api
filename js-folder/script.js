function personaliseName(name, randomCat) {
  let humanName = document.getElementById('human_name');
  humanName.textContent = "Hey " + name + "! You are a " + randomCat;
}

function chooseCatOptions() {

  event.preventDefault();
  const stranNum = Number(document.querySelector('[name="stranger-friendly"]:checked').value);
  const energyNum = Number(document.querySelector('[name="energy"]:checked').value);
  const childrenNum = Number(document.querySelector('[name="children"]:checked').value);

  const xhr = new XMLHttpRequest();
  const url = "https://api.thecatapi.com/v1/breeds/";
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const catObj = JSON.parse(xhr.responseText);
      let allCats = []

      catObj.forEach(function (element) {
        if (element.stranger_friendly == stranNum &&
          element.energy_level == energyNum &&
          element.child_friendly == childrenNum) {
          allCats.push(element.name)
        }
      });

      let catDescri = []
      let catDesc = document.querySelector('#cat_description');

      if (allCats.length == 0) {
        allCats.push("Stray Cat");
        catDescri.push("The stray cat is the most precious of all the cats! You may not have a home but that's because the world is your home. You are one of a kind!");
        catDesc.textContent = catDescri[0];
      }

      let randomCat = allCats[Math.floor(Math.random() * allCats.length)]
      getGiphy(randomCat)
      let catDescription = [];

      for (let i = 0; i < catObj.length; i++) {
        if (catObj[i].name == randomCat) {
          catDescription.push(catObj[i].description)
          catDesc.textContent = catDescription[0];
        }
      }
      let inputName = document.getElementById('name').value;
      personaliseName(inputName, randomCat);
    }
  }
  xhr.open("GET", url, true);
  xhr.send();
}
// Giphy API

let getGiphy = function (name) {
  const xhr = new XMLHttpRequest();
  const url = `https://api.giphy.com/v1/gifs/search?api_key=AKBayfz9FpPmrLSc5ScLLJx9BOzj2gaF&q=${name}+cat&limit=2`;
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const giphyObj = JSON.parse(xhr.responseText);
      let gifDrop = document.querySelector(".question__mark");
      let link = giphyObj.data[0].images.downsized_medium.url;
      gifDrop.src = link;
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
};