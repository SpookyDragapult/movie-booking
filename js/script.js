const movies = [
    { title: "Five Nights At Freddy's (2023)", description: "A troubled security guard begins working at Freddy Fazbear's Pizza. During his first night on the job, he realizes that the night shift won't be so easy to get through. Pretty soon he will unveil what actually happened at Freddy's.", image: "assets/fnaf1.jpg", rating: "★★★★★" },
    { title: "The Iron Claw (2023)", description: "The true story of the inseparable Von Erich brothers, who made history in the intensely competitive world of professional wrestling in the early 1980s.", image: "assets/ironclaw2.jpg", rating: "★★★☆☆" },
    { title: "Super Mario Bros The Movie (2023)", description: "A plumber named Mario travels through an underground labyrinth with his brother Luigi, trying to save a captured princess.", image: "assets/mario.jpg", rating: "★★★★★" },
    { title: "Deadpool & Wolverine (2024)", description: "Deadpool is offered a place in the Marvel Cinematic Universe by the Time Variance Authority, but instead recruits a variant of Wolverine to save his universe from extinction.", image: "assets/dp.jpg", rating: "★★★★★" },
    { title: "IF (2024)", description: "A young girl who goes through a difficult experience begins to see everyone's imaginary friends who have been left behind as their real-life friends have grown up.", image: "assets/if.jpg", rating: "★★★☆☆" },
    { title: "Sonic The Hedgehog 2 (2022)", description: "When the manic Dr. Robotnik returns to Earth with a new ally, Knuckles the Echidna, Sonic and his new friend Tails is all that stands in their way.", image: "assets/sonic2.jpg", rating: "★★★★★" },
   
];

const movieList = document.getElementById('movie-list');

movies.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'col-12 col-sm-6 col-md-4 mb-4';
    card.innerHTML = `
        <div class="card h-100">
            
            <img src="${movie.image}" class="card-img-top img-fluid" alt="${movie.title}">
            
            <div class="card-body">
                <h5 class="card-title">${movie.title}</h5>
                <p class="rating">${movie.rating}</p>
                <p class="card-text">${movie.description}</p>
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#bookingModal" onclick="openBookingModal('${movie.title}')">Book Ticket</button>
            </div>
        </div>
    `;
    movieList.appendChild(card);
});

function openBookingModal(movieTitle) {
    document.getElementById('movieTitle').value = movieTitle;
}

function bookTicket() {
    const movieName = document.getElementById('movieTitle').value;
    const name = document.getElementById('name').value;
    const seatsValue = document.getElementById('seats').value;

    const message = `Booking ${movieName} for ${seatsValue} seats by ${name}`;
    
    const modal = bootstrap.Modal.getInstance(document.getElementById('bookingModal'));
    modal.hide();

    alert(message);

    document.getElementById('name').value = '';
    document.getElementById('seats').value = '';
}

  