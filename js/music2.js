// ===============================
// ELEMENTS
// ===============================

const albumCards = document.querySelectorAll(".album-card");

const overlay = document.querySelector(".album-overlay");
const popup = document.querySelector(".album-popup");
const closeBtn = document.querySelector(".album-close");

const cover = document.getElementById("popup-cover");
const title = document.getElementById("popup-title");
const artist = document.getElementById("popup-artist");
const year = document.getElementById("popup-year");
const rating = document.getElementById("popup-rating");
const tracks = document.getElementById("popup-tracks");
const review = document.getElementById("popup-review");


// ===============================
// OPEN POPUP
// ===============================

albumCards.forEach(card => {

    card.addEventListener("click", () => {

        cover.src = card.dataset.cover;
        cover.alt = card.dataset.title;

        title.textContent = card.dataset.title;
        artist.textContent = card.dataset.artist;
        year.textContent = card.dataset.year;
        rating.textContent = card.dataset.rating;
        review.textContent = card.dataset.review;

        tracks.innerHTML = "";

        const trackList = card.dataset.tracks.split("|");

        trackList.forEach(track => {

            const li = document.createElement("li");
            li.textContent = track.trim();
            tracks.appendChild(li);

        });

        overlay.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


// ===============================
// CLOSE POPUP
// ===============================

function closePopup(){

    overlay.classList.remove("active");

    document.body.style.overflow = "auto";

}


// tombol X

closeBtn.addEventListener("click", closePopup);


// klik area gelap

overlay.addEventListener("click", (e)=>{

    if(e.target === overlay){

        closePopup();

    }

});


// ESC

document.addEventListener("keydown",(e)=>{

    if(e.key === "Escape" && overlay.classList.contains("active")){

        closePopup();

    }

});