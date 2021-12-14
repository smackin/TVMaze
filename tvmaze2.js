const form = document.querySelector('#searchForm'); 
form.addEventListener('submit', async function(e){
    e.preventDefault(); 
    const searchTerm = form.elements.query.value; 
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`); 
   // console.log(res.data) // res.data returns an array of objects from API.  
    //console.log(res.data[0].show.image.medium); // to return the image of index 0 - use the show.image.medium element
    //console.log(res.data[2].show.status);
    //console.log(res.data[7].show.image.medium);
    // const img = document.createElement('IMG'); 
    // img.src = (res.data[0].show.image.medium)
    // document.body.append(img);
    makeImages(res.data);
    form.elements.query.value=''; 
});
// to display all images for search results loop over res.data, which is an array,  and then for each result - create an image and append it. make a new function for this.  You would take the make image portion of the function and make a new function to call insude of form submission.   

function makeImages(shows){ 
for (let result of shows){
    if(result.show.image.medium){
    const img = document.createElement('IMG'); 
    img.src = (result.show.image.medium)  
    document.body.append(img);
    }
  }
}


