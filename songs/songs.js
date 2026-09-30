const songs = {

    kiss: {
        title: "Kiss of Life",
        artist: "Sade",
        image: "kiss-of-life.jpg",
        description: "Sade is my goat, there isn't one song i don't like that she sings. Kiss of life is really a kiss of life, its so peaceful and sublime",
        youtube: "https://youtu.be/uEcKk2U_U7A?si=Q7H7qpUmrl81_RS7"
    },

    chihiro: {
        title: "CHIHIRO",
        artist: "Billie Eilish",
        image: "chihiro.jpg",
        description: "u can't listen to chihiro and not get completely consumed by the dreaminess and ethereal instrumentals. everything in hmhas is amazing tho, it'll get u thru anything",
        youtube: "https://www.youtube.com/watch?v=BY_XwvKogC8"
    },

    yesterday: {
        title: "Yesterday Once More",
        artist: "The Carpenters",
        image: "yesterday-once-more.jpg",
        description: "baba used to play this in the car when i was a child, its like family sentimental song from my childhood, i feel like crying when i listen",
        youtube: "https://www.youtube.com/watch?v=wawbhXQX2TQ"
    },

    andromeda: {
        title: "Andromeda",
        artist: "Weyes Blood",
        image: "andromeda.jpg",
        description: "so this is probably my favorite song ever!! its so ethereal",
        youtube: ""
    },

    sanctuary: {
        title: "Sanctuary",
        artist: "Tamino × Mitski",
        image: "sanctuary.jpg",
        description: "tamino and mitski is like the ultiimate mashup, this is like me and lani's soul song, it put us at ease during turb scdc/track '26",
        youtube: "https://www.youtube.com/watch?v=e2w_YtnDteo",
    },

    "real-life": {
        title: "Real Life",
        artist: "The Marías",
        image: "real-life.jpg",
        description: "idk it speaks to me, everytime this plays in my airpod in hedlund class i feel less terrible no matter the circumstance",
        youtube: "https://www.youtube.com/watch?v=S51-qzfLdIc"
    },

    sultans: {
        title: "Sultans of Swing",
        artist: "Dire Straits",
        image: "sultans-of-swing.jpg",
        description: "guitar is so good and this is a good chill older song",
        youtube: "https://www.youtube.com/embed/h0ffIJ7ZO4U"
    },

    falling: {
        title: "Falling Away With You",
        artist: "Muse",
        image: "falling-away-with-you.jpg",
        description: "i like the guitar melody, its so beautiful, and muse in general is so good (esp older songs)",
        youtube: "https://www.youtube.com/watch?v=KyJxckIQ51U"
    },

    carousel: {
        title: "Carousel",
        artist: "Laufey",
        image: "carousel.jpg",
        description: "first time i listened to a matter of time i picked carousel as my favorite (so hard to choose tho)",
        youtube: "https://www.youtube.com/watch?v=mNr1qjm3HWg"
    },

    "look-on-down": {
        title: "Look On Down From The Bridge",
        artist: "Mazzy Star",
        image: "look-on-down.jpg",
        description: "mazzy star is another artist with no songs i dislike, but this one is just another level of ethereal",
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
