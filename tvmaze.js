/** Given a query string, return array of matching shows:
 *     { id, name, summary, episodesUrl }
 */

/** Search Shows
 *    - given a search term, search for tv shows that
 *      match that query.  The function is async show it
 *       will be returning a promise.
 *
 *   - Returns an array of objects. Each object should include
 *     following show information:
 *    {
        id: <show id>,
        name: <show name>,
        summary: <show summary>,
        image: <an image from the show data, or a default imege if no image exists, (image isn't needed until later)>
      }
 */    
    
//      async function searchShows(query) {
//   // TODO: Make an ajax request to the searchShows api.  Remove
//   // hard coded data.
//       let response = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`, {
//         params: {
//           q : query,
//         },
//       }); 
//       //console.log(response)
//       let shows = response.data.map(function (result) {
//         console.log(result)
//        // let show = result.show; 
//         return {
//           id : result.show.id, 
//           name: result.show.name, 
//           summary: result.show.summary, 
//           image: result.show.image ? result.show.image.medium : 'Sorry no Image',
//         };
//       }); 
//       console.log(shows);
//       return shows; 
//     }
//     // let dataArray =  (Object.entries(data))
//     //   for (let shows of dataArray){
//     //     console.log(shows)
//     //   }
//   // console.log(shows);
//   // console.log(response);
  
//   // console.log(response)


// /** Populate shows list:
//  *     - given list of shows, add shows to DOM
//  */

// function populateShows(shows) {
//   const $showsList = $("#shows-list");
//   $showsList.empty();

//   for (let show of shows) {
//     let $item = $(
//       `<div class="col-md-6 col-lg-3 Show" data-show-id="${show.id}">
//          <div class="card" data-show-id="${show.id}">
//           <img class="card-img-top" src="${show.image}">
//            <div class="card-body">
//              <h5 class="card-title">${show.name}</h5>
//              <p class="card-text">${show.summary}</p>
//            </div>
//          </div>
//        </div>
//       `
//       );

//     $showsList.append($item);
//   }
// }


// // /** Handle search form submission:
// //  *    - hide episodes area
// //  *    - get list of matching shows and show in shows list
// //  */
// // // added document.ready.  This allows the page to fully load before it sends the submit event listener. 
// //$(document).ready(function () {


// $("#search-form").on("submit", async function handleSearch (evt) {
//   evt.preventDefault();

//   let query = $("#search-query").val();
//   if (!query) return;

//   $("#episodes-area").hide();

//   let shows = await searchShows(query);

//   populateShows(shows);
// });
// //},

// // /** Given a show ID, return list of episodes:
// //  *      { id, name, season, number }
// //  */

// async function getEpisodes(id) {
//   let response = await axios.get(`https://api.tvmaze.com/shows/${id}/episodes`);
// }
//       // let episodes = response.data.map(function(episode) {
        
//       //   id: episode.id; 
//       //   name: episode.name; 
//       //   season: episode.season; 
//       //   number: episode.number; 
//       // }); 
//       // return episodes; 
    
// //   // TODO: get episodes from tvmaze
// //   //       you can get this by making GET request to
// //   //       http://api.tvmaze.com/shows/SHOW-ID-HERE/episodes

// //   // TODO: return array-of-episode-info, as described in docstring above

   
/** Given a query string, return array of matching shows:
 *     { id, name, summary, episodesUrl }
 */

/** Search Shows
 *    - given a search term, search for tv shows that
 *      match that query.  The function is async show it
 *       will be returning a promise.
 *
 *   - Returns an array of objects. Each object should include
 *     following show information:
 *    {
        id: <show id>,
        name: <show name>,
        summary: <show summary>,
        image: <an image from the show data, or a default imege if no image exists, (image isn't needed until later)>
      }
 */

async function searchShows(query) {
  // TODO: Make an ajax request to the searchShows api.  Remove
  // hard coded data.
  const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${query}`);
  console.log(response)
  let data = response.data.map(function (result) {
    let show = result.show;
    return {
      id: show.id,
      name: show.name,
      summary: show.summary,
      image: show.image ? show.image.medium : 'Sorry no Image',
    };
  });

  // let dataArray =  (Object.entries(data))
  //   for (let shows of dataArray){
  //     console.log(shows)
  //   }
  return data;
}

/** Populate shows list:
 *     - given list of shows, add shows to DOM
 */

function populateShows(shows) {
  const $showsList = $("#shows-list");
  $showsList.empty();

  for (let show of shows) {
    let $item = $(
      `<div class="col-md-6 col-lg-3 Show" data-show-id="${show.id}">
         <div class="card" data-show-id="${show.id}">
          <img class="card-img-top" src="${show.image}">
           <div class="card-body">
             <h5 class="card-title">${show.name}</h5>
             <p class="card-text">${show.summary}</p>
           </div>
         </div>
       </div>
      `);

    $showsList.append($item);
  }
}


/** Handle search form submission:
 *    - hide episodes area
 *    - get list of matching shows and show in shows list
 */


// Calvin Note: add document.ready so the page can fully load and then set submit event listener
$(document).ready(function () {

  // Calvin Note: Update id to match DOM id #searchform
  $("#searchForm").on("submit", async function handleSearch(evt) {
    evt.preventDefault();

    // Calvin Note: Update id to match DOM id #search-query
    let query = $("#search-query").val();
    if (!query) return;

    $("#episodes-area").hide();

    let shows = await searchShows(query);
    console.log(shows);

    populateShows(shows);
  });
});


// /** Given a show ID, return list of episodes:
//  *      { id, name, season, number }
//  */

// async function getEpisodes(id) {
//   let response = await axios.get(`http://api.tvmaze.com/shows/${id}/episodes`);
//   let episodes = response.data.map(function (episode) {

//     id: episode.id;
//     name: episode.name;
//     season: episode.season;
//     number: episode.number;
//   });
//   return episodes;

//   // TODO: get episodes from tvmaze
//   //       you can get this by making GET request to
//   //       http://api.tvmaze.com/shows/SHOW-ID-HERE/episodes

//   // TODO: return array-of-episode-info, as described in docstring above
// }

