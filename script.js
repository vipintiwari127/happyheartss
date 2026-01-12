
// Mega Menu Data
const menuData = {
    anniversary: {
        categories: ['Candlelight Dinners', 'Anniversary Decorations', 'Cakes', 'Bouquets', 'Surprises', 'Couple Activities'],
        decorations: ['Love Wall', 'Special Anniversary Decoration', 'Balloon Decoration', 'Romantic Heart Decoration', 'Hotel Room Decoration'],
        gifts: ['Digital Gifts', 'Personalised Surprises', 'Balloon Boxes', 'Photo Gifts', 'Heart Shape Cakes', 'Combos', 'Bouquets'],
        topSellers: [
            { name: 'Picture of Pictures', img: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=200&h=200&fit=crop' },
            { name: 'I Love You Balloon Bouquet', img: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=200&h=200&fit=crop' },
            { name: 'Red Heart Balloon Backdrop', img: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=200&h=200&fit=crop' },
            { name: 'Starlit Dinner Under the Moon', img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=200&h=200&fit=crop' }
        ]
    },
    birthdays: {
        categories: ['Birthday Decorations', 'Birthday Cakes', 'Balloon Bouquets', 'Surprise Planning', 'Theme Parties', 'Photo Shoots'],
        decorations: ['Balloon Arch', 'LED Name Board', 'Balloon Decoration', 'Theme Decoration', 'Photo Booth Setup'],
        gifts: ['Customized Cakes', 'Photo Frames', 'Balloon Surprises', 'Gift Hampers', 'Personalized Gifts', 'Flower Bouquets'],
        topSellers: [
            { name: 'Happy Birthday Balloon Set', img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=200&h=200&fit=crop' },
            { name: 'Rainbow Balloon Arch', img: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=200&h=200&fit=crop' },
            { name: 'LED Birthday Decoration', img: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=200&h=200&fit=crop' },
            { name: 'Birthday Cake Combo', img: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=200&h=200&fit=crop' }
        ]
    },
    gifts: {
        categories: ['Personalized Gifts', 'Chocolates & Hampers', 'Flowers & Bouquets', 'Gift Combos', 'Luxury Gifts', 'Handmade Gifts'],
        decorations: ['Gift Wrapping', 'Surprise Box', 'Balloon Gift Box', 'Flower Arrangements', 'Customized Packaging'],
        gifts: ['Photo Gifts', 'Engraved Items', 'Gift Baskets', 'Chocolate Boxes', 'Wine & Champagne', 'Jewelry', 'Tech Gadgets'],
        topSellers: [
            { name: 'Personalized Photo Frame', img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=200&h=200&fit=crop' },
            { name: 'Luxury Chocolate Box', img: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=200&h=200&fit=crop' },
            { name: 'Rose Bouquet Premium', img: 'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=200&h=200&fit=crop' },
            { name: 'Combo Gift Hamper', img: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=200&h=200&fit=crop' }
        ]
    },
    candlelight: {
        categories: ['Romantic Dinners', 'Beach Dining', 'Rooftop Setups', 'Garden Dining', 'Private Dining', 'Couple Packages'],
        decorations: ['Candle Decoration', 'Fairy Lights', 'Flower Petals', 'Romantic Setup', 'Table Decoration'],
        gifts: ['Wine Bottles', 'Flower Bouquets', 'Chocolates', 'Gift Vouchers', 'Couple Accessories', 'Personalized Menu'],
        topSellers: [
            { name: 'Rooftop Candlelight Dinner', img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=200&h=200&fit=crop' },
            { name: 'Beach Romantic Setup', img: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=200&h=200&fit=crop' },
            { name: 'Private Garden Dining', img: 'https://images.unsplash.com/photo-1551218372-a8789b81b253?w=200&h=200&fit=crop' },
            { name: 'Luxury Hotel Dinner', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=200&h=200&fit=crop' }
        ]
    },
    decorations: {
        categories: ['Balloon Decorations', 'Flower Decorations', 'LED Decorations', 'Theme Decorations', 'Outdoor Decorations', 'Indoor Decorations'],
        decorations: ['Balloon Arch', 'Flower Wall', 'LED Name Board', 'Photo Booth', 'Backdrop Setup', 'Ceiling Decoration'],
        gifts: ['Decoration Combos', 'DIY Kits', 'Party Props', 'Banners', 'Confetti', 'Party Favors'],
        topSellers: [
            { name: 'Grand Balloon Arch', img: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=200&h=200&fit=crop' },
            { name: 'Flower Wall Backdrop', img: 'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=200&h=200&fit=crop' },
            { name: 'LED Light Decoration', img: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=200&h=200&fit=crop' },
            { name: 'Theme Party Decor', img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=200&h=200&fit=crop' }
        ]
    },
    festivals: {
        categories: ['Diwali Celebrations', 'Holi Parties', 'Christmas Decor', 'New Year Events', 'Eid Celebrations', 'Pongal Specials'],
        decorations: ['Traditional Decor', 'Festive Lights', 'Rangoli Designs', 'Torans & Hangings', 'Diyas & Candles'],
        gifts: ['Festival Gift Hampers', 'Sweet Boxes', 'Dry Fruit Boxes', 'Festive Combos', 'Traditional Gifts', 'Gift Cards'],
        topSellers: [
            { name: 'Diwali Decoration Kit', img: 'https://images.unsplash.com/photo-1605556992047-c71ab3b9c3c0?w=200&h=200&fit=crop' },
            { name: 'Christmas Tree Setup', img: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=200&h=200&fit=crop' },
            { name: 'Festival Gift Hamper', img: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=200&h=200&fit=crop' },
            { name: 'Traditional Decor Set', img: 'https://images.unsplash.com/photo-1582747652441-68ada6440cce?w=200&h=200&fit=crop' }
        ]
    },
    kids: {
        categories: ['Kids Birthday Parties', 'Theme Decorations', 'Cartoon Characters', 'Games & Activities', 'Return Gifts', 'Party Entertainment'],
        decorations: ['Superhero Theme', 'Princess Theme', 'Cartoon Decoration', 'Jungle Theme', 'Space Theme', 'Unicorn Theme'],
        gifts: ['Toy Hampers', 'Cake & Treats', 'Party Favors', 'Costume Rentals', 'Photo Booth Props', 'Activity Kits'],
        topSellers: [
            { name: 'Superhero Party Pack', img: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=200&h=200&fit=crop' },
            { name: 'Princess Castle Decor', img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=200&h=200&fit=crop' },
            { name: 'Cartoon Character Setup', img: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=200&h=200&fit=crop' },
            { name: 'Kids Party Combo', img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=200&h=200&fit=crop' }
        ]
    }
};

// Mega Menu Functionality
const navItems = document.querySelectorAll('.nav-item[data-menu]');
const megaMenu = document.getElementById('megaMenu');
const overlay = document.getElementById('overlay');
const menuContent = document.getElementById('menuContent');
let currentMenu = null;

navItems.forEach(item => {
    item.addEventListener('click', function () {
        const menuType = this.getAttribute('data-menu');

        if (currentMenu === menuType && megaMenu.classList.contains('active')) {
            closeMegaMenu();
        } else {
            openMegaMenu(menuType);
        }
    });
});

overlay.addEventListener('click', closeMegaMenu);

function openMegaMenu(menuType) {
    const data = menuData[menuType];
    if (!data) return;

    currentMenu = menuType;

    menuContent.innerHTML = `
                <div class="menu-column">
                    <h3>CATEGORIES</h3>
                    <ul>
                        ${data.categories.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                <div class="menu-column">
                    <h3>DECORATIONS</h3>
                    <ul>
                        ${data.decorations.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                <div class="menu-column">
                    <h3>GIFTS</h3>
                    <ul>
                        ${data.gifts.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                <div class="menu-column">
                    <h3>TOP SELLERS</h3>
                    <div class="top-sellers">
                        ${data.topSellers.map(item => `
                            <div class="seller-item">
                                <img src="${item.img}" alt="${item.name}">
                                <p>${item.name}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;

    megaMenu.classList.add('active');
    overlay.classList.add('active');
}

function closeMegaMenu() {
    megaMenu.classList.remove('active');
    overlay.classList.remove('active');
    currentMenu = null;
}

// Close mega menu when clicking on a menu item
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('menu-column') ||
        e.target.tagName === 'LI' ||
        e.target.classList.contains('seller-item')) {
        closeMegaMenu();
    }
});


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const sliderWrapper = document.getElementById('sliderWrapper');
const dotsContainer = document.getElementById('sliderDots');
let autoSlideInterval;

// Create navigation dots
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

function updateSlider() {
    sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function changeSlide(direction) {
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    updateSlider();
    resetAutoSlide();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
    resetAutoSlide();
}

function autoSlide() {
    currentSlide++;
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    updateSlider();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(autoSlide, 4000);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// Start auto sliding
startAutoSlide();

// Pause on hover
sliderWrapper.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
});

sliderWrapper.addEventListener('mouseleave', () => {
    startAutoSlide();
});

let decorsIndex = 0;
const decorsTrack = document.getElementById("decorsTrack");
const decorsCards = document.querySelectorAll(".decors-card");

function decorsVisible() {
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 768) return 2;
    if (window.innerWidth <= 1200) return 3;
    return 4;
}

function movePrev() {
    if (decorsIndex > 0) {
        decorsIndex--;
        updateDecorsSlider();
    }
}

function moveNext() {
    const max = decorsCards.length - decorsVisible();
    if (decorsIndex < max) {
        decorsIndex++;
        updateDecorsSlider();
    }
}

function updateDecorsSlider() {
    const width = decorsCards[0].offsetWidth + 20;
    decorsTrack.style.transform =
        `translateX(-${decorsIndex * width}px)`;
}

window.addEventListener("resize", updateDecorsSlider);

let decorIndex = 0;
const decorTrack = document.getElementById("decorTrack");
const decorCards = document.querySelectorAll(".decor-card");

function decorVisible() {
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 768) return 2;
    if (window.innerWidth <= 1200) return 3;
    return 4;
}

function movePrev2() {
    if (decorIndex > 0) {
        decorIndex--;
        updateDecorSlider();
    }
}

function moveNext2() {
    const max = decorCards.length - decorVisible();
    if (decorIndex < max) {
        decorIndex++;
        updateDecorSlider();
    }
}

function updateDecorSlider() {
    const width = decorCards[0].offsetWidth + 20;
    decorTrack.style.transform =
        `translateX(-${decorIndex * width}px)`;
}

window.addEventListener("resize", updateDecorSlider);


const reviewsTrack = document.getElementById("reviewsTrack");
const reviewDots = document.getElementById("reviewDots");
const reviewCards = document.querySelectorAll(".review-item");

let reviewIndex = 0;
let autoReviewTimer;

function reviewsPerView() {
    if (innerWidth <= 480) return 1;
    if (innerWidth <= 768) return 2;
    if (innerWidth <= 1200) return 3;
    return 4;
}

const totalReviewSlides = Math.ceil(reviewCards.length - reviewsPerView() + 1);

function buildDots() {
    reviewDots.innerHTML = "";
    for (let i = 0; i < totalReviewSlides; i++) {
        let dot = document.createElement("div");
        dot.className = "review-dot" + (i === 0 ? " active" : "");
        dot.onclick = () => jumpToReview(i);
        reviewDots.appendChild(dot);
    }
}

function updateReviewSlider() {
    const cardSize = reviewCards[0].offsetWidth + 20;
    reviewsTrack.style.transform = `translateX(${-reviewIndex * cardSize}px)`;
    document.querySelectorAll(".review-dot").forEach((d, i) => d.classList.toggle("active", i === reviewIndex));
    resetAutoReviews();
}

function slideReviews(dir) {
    reviewIndex += dir;
    if (reviewIndex < 0) reviewIndex = totalReviewSlides - 1;
    if (reviewIndex >= totalReviewSlides) reviewIndex = 0;
    updateReviewSlider();
}

function jumpToReview(i) {
    reviewIndex = i;
    updateReviewSlider();
}

function startAutoReviews() {
    autoReviewTimer = setInterval(() => slideReviews(1), 3000);
}

function resetAutoReviews() {
    clearInterval(autoReviewTimer);
    startAutoReviews();
}

reviewsTrack.onmouseenter = () => clearInterval(autoReviewTimer);
reviewsTrack.onmouseleave = startAutoReviews;

buildDots();
startAutoReviews();


// CITY TAB CLICK
document.querySelectorAll('.city-tab').forEach(tab => {
    tab.addEventListener('click', () => {

        // Active tab change
        document.querySelector('.city-tab.active').classList.remove('active');
        tab.classList.add('active');

        // Selected city
        const selectedCity = tab.innerText;

        // Update all services city text
        document.querySelectorAll('.service-city').forEach(city => {
            city.innerText = `in ${selectedCity}`;
        });
    });
});

// SHOW MORE
function toggleServices() {
    document.querySelectorAll('.service.hidden').forEach(item => {
        item.style.display = 'block';
    });
    document.querySelector('.show-more').style.display = 'none';
}



document.querySelector('.get-touch').addEventListener('click', function (e) {
    e.stopPropagation();
    this.classList.toggle('active');
});
document.addEventListener('click', function () {
    document.querySelector('.get-touch').classList.remove('active');
});


