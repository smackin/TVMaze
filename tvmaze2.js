const form = document.querySelector('#searchForm'); 

form.addEventListener('submit', async function(e){
    e.preventDefault(); 
    const searchTerm = form.elements.query.value;
    const params = {params: {q:searchTerm, }} // each key-value pair will be added to the query string.   
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=`, params); 
    const episode = {
        id: res.data[0].show.id,
        name:  res.data[0].show.name,
        summary: res.data[0].show.summary,
     };
    createEpisodeList(episode); 
    // makeImages(res.data);// function created below to make image - the images are being made from the res.data element that was returned by the API.   
    form.elements.query.value = ''; // emptying the input after the submit request is run. 
});
// to display all images for search results loop over res.data, which is an array,  and then for each result - create an image and append it. make a new function for this.  You would take the make image portion of the function and make a new function to call insude of form submission.   

function makeImages(shows){ 
for (let result of shows){
    if(result.show.image){
    const img = document.createElement('IMG'); 
    img.src = result.show.image.medium;  
    document.body.append(img);
    }
  }
};

async function createEpisodeList(episode) {
    const ul = document.getElementById('episodesList');
    const newLi = document.createElement('LI'); 
    let episodeInfo = {
        id: res.data[0].show.id,
        name:  res.data[0].show.name,
        summary: res.data[0].show.summary,
     };
    newLi.innerText = episodeInfo
    ul.append(newLi); 
};




 // console.log(res.data) // res.data returns an array of objects from API.  
//  console.log(res.data[0].show.id); // to return the image of index 0 - use the show.image.medium element
//  console.log(res.data[0].show.name); 
//  console.log(res.data[0].show.summary); 
//  console.log(res.data[0])
 //console.log(res.data[2].show.status);
 //console.log(res.data[7].show.image.medium);
 // const img = document.createElement('IMG'); 
 // img.src = (res.data[0].show.image.medium)
 // document.body.append(img);