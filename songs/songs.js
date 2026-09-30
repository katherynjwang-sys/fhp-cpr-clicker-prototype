const songs = {

    kiss: {
        title: "Kiss of Life",
        artist: "Sade",
        image: "kiss-of-life.jpg",
        description: "Sade is my goat, there isn't one song i don't like that she sings. Kiss of life is really a kiss of life, its so peaceful and sublime",
    },

    chihiro: {
        title: "CHIHIRO",
        artist: "Billie Eilish",
        image: "chihiro.jpg",
        description: "u can't listen to chihiro and not get completely consumed by the dreaminess and ethereal instrumentals. everything in hmhas is amazing tho, it'll get u thru anything",
    },

    yesterday: {
        title: "Yesterday Once More",
        artist: "The Carpenters",
        image: "yesterday-once-more.jpg",
        description: "baba used to play this in the car when i was a child, its like family sentimental song from my childhood, i feel like crying when i listen",
    },

    andromeda: {
        title: "Andromeda",
        artist: "Weyes Blood",
        image: "andromeda.jpg",
        description: "so this is probably my favorite song ever!! its so ethereal",
    },

    sanctuary: {
        title: "Sanctuary",
        artist: "Tamino × Mitski",
        image: "sanctuary.jpg",
        description: "tamino and mitski is like the ultiimate mashup, this is like me and lani's soul song, it put us at ease during turb scdc/track '26",
    },

    "real-life": {
        title: "Real Life",
        artist: "The Marías",
        image: "real-life.jpg",
        description: "idk it speaks to me, everytime this plays in my airpod in hedlund class i feel less terrible no matter the circumstance",
    },

    sultans: {
        title: "Sultans of Swing",
        artist: "Dire Straits",
        image: "sultans-of-swing.jpg",
        description: "guitar is so good and this is a good chill older song",
    },

    falling: {
        title: "Falling Away With You",
        artist: "Muse",
        image: "falling-away-with-you.jpg",
        description: "i like the guitar melody, its so beautiful, and muse in general is so good (esp older songs)",
    },

    carousel: {
        title: "Carousel",
        artist: "Laufey",
        image: "carousel.jpg",
        description: "first time i listened to a matter of time i picked carousel as my favorite (so hard to choose tho)",
    },

    "look-on-down": {
        title: "Look On Down From The Bridge",
        artist: "Mazzy Star",
        image: "look-on-down.jpg",
        description: "mazzy star is another artist with no songs i dislike, but this one is just another level of ethereal",
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

const youtubeLink = document.getElementById("youtube-link");

/* OPEN SONG POPUP */

cards.forEach(function(card) {

    card.addEventListener("click", function() {

        const songID = card.dataset.song;
        const song = songs[songID];

        detailImage.src = song.image;
        detailImage.alt = song.title;

        detailTitle.textContent = song.title;
        detailArtist.textContent = song.artist;
        detailDescription.textContent = song.description;

        details.classList.add("active");

    });

});


/* CLOSE SONG POPUP */

backButton.addEventListener("click", function() {

    details.classList.remove("active");

});

