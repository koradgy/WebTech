const pizzaCards = document.querySelectorAll('.pizza-card');
const pizzaDetails = document.querySelector('.pizza-details');

pizzaCards.forEach((card) => {
    card.addEventListener('click', () => {
        // Egy kártya kiválasztása
        pizzaCards.forEach((c) => c.classList.remove('active'));
        card.classList.add('active');

        // Pizza részletek megjelenítése (itt a kiválasztott pizza nevét és további részleteket adhatod meg)
        pizzaDetails.innerHTML = `
            <h2>${card.querySelector('h2').textContent}</h2>
            <p>Méret: Kicsi, Közepes, Nagy</p>
            <p>Extra feltétek: Szalámi, Gomba, Olívabogyó</p>
            <button class="order-button">Rendelés</button>
        `;

        pizzaDetails.style.display = 'block';
    });
});
