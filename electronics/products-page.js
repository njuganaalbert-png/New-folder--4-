const searchInput = document.getElementById('searchInput');
let currentCategory = 'all';

function filterCategory(category, buttonElement) {
    currentCategory = category;

    window.filterCategory = function (category, buttonElement) {
        currentCategory = category;

        const allButtons = document.querySelectorAll('.categories button');
        allButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        if (buttonElement) {
            buttonElement.classList.add('active');
        }

        filterProducts();
    };
}

function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const cardText = card.textContent.toLowerCase();
        const cardCategory = card.getAttribute('data-category');

        const matchesSearch = cardText.includes(searchTerm);

        const matchesCategory = (currentCategory === 'all' ||
            cardCategory.toLowerCase() === currentCategory.toLowerCase());

        if (matchesSearch && matchesCategory) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

if (searchInput) {
    searchInput.addEventListener('input', filterProducts);
}   