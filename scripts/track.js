
const wishLists = document.querySelector('#wishList');
wishLists.addEventListener("click", wishList)
function wishList() {
    window.location.href = "./track.html"
}

// importing displayTrack for showing data of track/wishlist
import displayTrack from "../components/displayTrackData.js"

// importing displayNoTrack for showing details if no items added into track/wishlist
import displayNoTrack from "../components/displayNoTrack.js"

let trackDeals = JSON.parse(localStorage.getItem("trackDeals"))
// console.log(trackDeals)

if (trackDeals == null) {
    const main = document.querySelector('#main');
    let html = displayNoTrack()
    main.innerHTML = html

    // button for redirecting to home page
    const findFav = document.querySelector('#findFav');
    findFav.addEventListener("click", function () {
        window.location.href = "../Product.html"
    })
}
else {
    const main = document.querySelector('#main');
    displayTrack(trackDeals, main)
}
