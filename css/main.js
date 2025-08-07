
/**
 * The DOM element that will contain the rendered player cards.
 */
const players = [
    {
        number: 1,
        name: "Mohamed Salah",
        image: "https://backend.liverpoolfc.com/sites/default/files/styles/sm/public/2025-08/mohamed-salah-2526-headshot_eef288f3e99d1b7f98c2cb6a577ad06c.webp?itok=zZY5CCbm",
        position: "Goalkeeper",
        season: "2025-26",
        profile: "profile-alisson.html"
    },
    {
        number: 13, name: "Alisson Becker",
        image: "images/alisson.jpg",
        position: "Goalkeeper",
        season: "2025-26",
        profile: "profile-alisson.html"
    }
    // Add more players as needed
];

// Render player cards
const playerCards = document.getElementById('playerCards');

function renderPlayerCards() {
    return players.map(player => `
                <div class="col-md-3 mb-4">
                    <div class="card h-100 shadow-sm border-0">
                    <div class="card-body text-center">
                        <div class="display-6 fw-bold mb-2">${player.number}</div>
                        <img src="${player.image}" class="rounded-circle mb-3" style="width:70px;height:70px;" alt="${player.name}">
                        <h5 class="card-title">${player.name}</h5>
                        <p class="mb-1 text-uppercase text-muted small">${player.position}</p>
                        <p class="mb-2 text-secondary fw-bold small">Season ${player.season}</p>
                        <a href="${player.profile}" class="btn btn-link fw-bold text-decoration-none">
                        VIEW PROFILE <i class="fas fa-chevron-right"></i>
                        </a>
                    </div>
                    </div>
                </div>
                `).join('');
}

renderPlayerCards();
playerCards.innerHTML = renderPlayerCards();