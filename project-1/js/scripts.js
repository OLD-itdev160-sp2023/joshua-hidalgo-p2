//welcome
var user = 'Josh';
var salutation = "Meow for you, ";
var greeting = salutation + user + '! This is the best time to adopt a cat';
var greetingEl = document.getElementById('adopt');

greetingEl.textContent = greeting;

//products price
var house = 15,
    bowl = 3,
    discount = .10
    total = house + bowl,
    sale = total - (total * discount),
    houseEl = document.getElementById('house');
    bowlEl = document.getElementById('bowl');
    saleEl = document.getElementById('sale');

    houseEl.textContent = house.toFixed(2);
    bowlEl.textContent = bowl.toFixed(2);
    saleEl.textContent = sale.toFixed(2);
