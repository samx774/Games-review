
async function getGames(category = 'MMORPG'){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a52d4ceb8amsh42c8a29ac5b2b03p12ee91jsn28a760f94105',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    let response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}` , options);
    let result = await response.json();
    displayGames(result)
    $(".spinner").addClass("d-none");
}
getGames()
function displayGames(result){
    let container = ``;
    for(let i = 0; i < result.length; i++){
        container += `
        <div class="col-xl-3 col-lg-4 col-md-6 ">
        <div class="game border-fix">
          <img id="gameImg" class="w-100 py-3 px-3" src="${result[i].thumbnail}" alt="">
          <div class="px-3 game-info d-flex align-items-center justify-content-between mt-2">
            <h3 class="text-white game-title my-0">${result[i].title}</h3>
            <p class="my-0 rounded-3">Free</p>
          </div>
          <div class="px-3 game-desc text-center pb-2">
            <p>
            ${result[i].short_description}
            </p>
          </div>
          <div class="game-footer py-2 px-3 text-white d-flex align-items-center justify-content-between">
            <p class="my-0">${result[i].genre}</p>
            <p class="my-0">${result[i].platform}</p>
          </div>
        </div>
      </div>
         `
         $(".spinner").addClass("d-none");
    }
    document.getElementById('ms').innerHTML = container;
}

$("li a").click(function (e){
    let target = e.target.innerText
    $(".spinner").removeClass("d-none");
    getGames(target)
})
$("document").ready(function(){
    $(".loading").fadeOut(1000 , function(){
        $("body").removeClass("overflow-hidden")
    })  
})