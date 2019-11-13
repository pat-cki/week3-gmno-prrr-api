function chooseCatOptions () {
event.preventDefault();
let stranChecked = [];
let stranFriendliness = document.getElementsByName("stranger-friendly");
for (let i=0;i<stranFriendliness.length;i++){
  if ( stranFriendliness[i].checked ) {
    stranChecked.push(stranFriendliness[i].value);
  let strangerVal = Number(stranChecked[0])
  } 
  console.log("shhh");
}

let energyChecked = [];
let energyLevel = document.getElementsByName("energy");
for (let i=0;i<energyLevel.length;i++){
  if ( energyLevel[i].checked ) {
    energyChecked.push(energyLevel[i].value);
    let energyVal = Number(energyChecked[0])
  }

}
let childrenChecked = [];
let childrenFriendliness = document.getElementsByName("children");
for (let i=0;i<childrenFriendliness.length;i++){
  if ( childrenFriendliness[i].checked ) {
    childrenChecked.push(childrenFriendliness[i].value);
    let childrenVal = Number(childrenChecked[0])
  }

}
    
    let xhr = new XMLHttpRequest();
    let url = "https://api.thecatapi.com/v1/breeds/";
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          let catObj = JSON.parse(xhr.responseText);
          console.log(strangerVal);
          for (let i=0; i<catObj.length; i++) {
            if (strangerVal === catObj[i].stranger_friendly && 
                energyVal === catObj[i].energy_level && 
                childrenVal === catObj[i].child_friendly ) {
                  return catObj.name;
                } 
          }          
        
          console.log("this is catarray", catObj);
        }
    };
    xhr.open("GET", url, true);
    xhr.send();



}
  
//   (function () {
//     let xhr = new XMLHttpRequest();
//     let url = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//           let giphyObj = JSON.parse(xhr.responseText);
//           let gifDrop = document.querySelector(".gif");
//           let link = giphyObj.data[1].images.downsized_medium.url;
//           gifDrop.src = link;
//         }
//     };
//     xhr.open("GET", url, true);
//     xhr.send();
//   })();
  
  //First giphy 
    // (function () {
      //   let xhr = new XMLHttpRequest();
      //   let breed = 'british-blue';
      //   let britishBlue = `https://api.giphy.com/v1/gifs/search?api_key=AKBayfz9FpPmrLSc5ScLLJx9BOzj2gaF&q=${breed}&limit=2`;
      //   xhr.onreadystatechange = function() {
      //       if (xhr.readyState == 4 && xhr.status == 200) {
      //         let giphyObj = JSON.parse(xhr.responseText);
      //         console.log(giphyObj);
      //         let gifDrop = document.querySelector(".gif");
      //         console.log(gifDrop);
      //         let link = giphyObj.data[1].images.downsized_medium.url;
      //         gifDrop.src = link;
      //         console.log(link);
      //       }
      //   };
      //   xhr.open("GET", britishBlue, true);
      //   xhr.send();
      // })();