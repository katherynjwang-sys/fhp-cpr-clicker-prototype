const songs = {

    kiss: {
        title: "Kiss of Life",
        artist: "Sade",
        image: "kiss-of-life.jpg",
        description: "A smooth, dreamy Sade classic from Love Deluxe.",
        youtube: ""
    },

    chihiro: {
        title: "CHIHIRO",
        artist: "Billie Eilish",
        image: "chihiro.jpg",
        description: "A dreamy and atmospheric track from HIT ME HARD AND SOFT.",
        youtube: ""
    },

    yesterday: {
        title: "Yesterday Once More",
        artist: "The Carpenters",
        image: "yesterday-once-more.jpg",
        description: "A nostalgic Carpenters song about remembering music and memories from the past.",
        youtube: ""
    },

    andromeda: {
        title: "Andromeda",
        artist: "Weyes Blood",
        image: "andromeda.jpg",
        description: "A beautiful, spacey song from Weyes Blood's Titanic Rising.",
        youtube: ""
    },

    sanctuary: {
        title: "Sanctuary",
        artist: "Tamino × Mitski",
        image: "sanctuary.jpg",
        description: "A haunting collaboration between Tamino and Mitski.",
        youtube: "",
    },

    "real-life": {
        title: "Real Life",
        artist: "The Marías",
        image: "real-life.jpg",
        description: "A dreamy, hazy track by The Marías.",
        youtube: ""
    },

    sultans: {
        title: "Sultans of Swing",
        artist: "Dire Straits",
        image: "sultans-of-swing.jpg",
        description: "A Dire Straits classic built around Mark Knopfler's distinctive guitar playing.",
        youtube: "https://www.youtube.com/embed/h0ffIJ7ZO4U"
    },

    falling: {
        title: "Falling Away With You",
        artist: "Muse",
        image: "falling-away-with-you.jpg",
        description: "A softer, atmospheric Muse track from Absolution.",
        youtube: ""
    },

    carousel: {
        title: "Carousel",
        artist: "Laufey",
        image: "carousel.jpg",
        description: "A jazzy, romantic-sounding track by Laufey.",
        youtube: ""
    },

    "look-on-down": {
        title: "Look On Down From The Bridge",
        artist: "Mazzy Star",
        image: "look-on-down.jpg",
        description: "A slow, atmospheric Mazzy Star song from Among My Swan.",
        youtube: "https://www.youtube.com/embed/p3NZn0mA_XI"
    }

};


const cards = document.querySelectorAll(".song-card");

const grid = document.getElementById("song-grid");
const details = document.getElementById("song-details");

const backButton = document.getElementById("back-button");

const detailImage = document.getElementById("detail-image");
const detailTitle = document.getElementById("detail-title");
const detailArtist = document.getElementById("detail-artist");
const detailDescription = document.getElementById("detail-description");

const youtubePlayer = document.getElementById("youtube-player");


/* OPEN SONG */

cards.forEach(function(card) {

    card.addEventListener("click", function() {

        const songID = card.dataset.song;
        const song = songs[songID];

        detailImage.src = song.image;
        detailImage.alt = song.title;

        detailTitle.textContent = song.title;

        detailArtist.textContent = song.artist;

        detailDescription.textContent = song.description;


        if (song.youtube) {

            youtubePlayer.src = song.youtube;

            youtubePlayer.style.display = "block";

        } else {

            youtubePlayer.src = "";

            youtubePlayer.style.display = "none";

        }


        grid.style.display = "none";

        details.classList.add("active");

    });

});


/* BACK TO SONGS */

backButton.addEventListener("click", function() {

    details.classList.remove("active");

    grid.style.display = "grid";

    youtubePlayer.src = "";

});
