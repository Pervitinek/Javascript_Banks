const banks = {
    "banks": [
        {
            "name": "Bank of Springfield",
            "location": "123 Main St, Springfield, IL",
            "overall_score": 85,
            "opening_hours": "9:00 AM - 5:00 PM",
            "loan_interest_rate": "3.5%"
        },
        {
            "name": "Capital City Bank",
            "location": "456 Elm St, Capital City, CA",
            "overall_score": 78,
            "opening_hours": "8:30 AM - 4:30 PM",
            "loan_interest_rate": "4.0%"
        },
        {
            "name": "Metro Financial",
            "location": "789 Oak St, Metroville, NY",
            "overall_score": 92,
            "opening_hours": "10:00 AM - 7:00 PM",
            "loan_interest_rate": "3.75%"
        },
        {
            "name": "Maze Bank",
            "location": "79 Oak St, Metroville, NY",
            "overall_score": 52,
            "opening_hours": "10:00 AM - 7:00 PM",
            "loan_interest_rate": "5.75%"
        },
        {
            "name": "Riverside Savings & Loan",
            "location": "101 River Rd, Riverside, TX",
            "overall_score": 81,
            "opening_hours": "9:00 AM - 6:00 PM",
            "loan_interest_rate": "3.9%"
        },
        {
            "name": "Golden Bank",
            "location": "79 Gold St, Second, LS",
            "overall_score": 12,
            "opening_hours": "10:00 AM - 7:00 PM",
            "loan_interest_rate": "105%"
        }
    ]
}

let clientNum = Math.floor(Math.random() * (4000 - 1000) + 1000);

function createBankCard(item) {
    const newElement = document.createElement("div");
    const header = document.createElement("div");
    const items = document.createElement("div");
    const greenSpan = document.createElement("span");
    const blackSpan = document.createElement("p");

    blackSpan.innerText = "Clients: " + clientNum;
    items.appendChild(blackSpan);
    blackSpan.classList.add("boldCardSpan");
    header.innerText = item.name;

    const openingHours = document.createElement("p");
    openingHours.innerText = "Opening Hours: " + item.opening_hours;
    items.appendChild(openingHours);

    const location = document.createElement("p");
    location.innerText = "Location: " + item.location;
    items.appendChild(location);

    greenSpan.innerText += "Score: " + item.overall_score;
    items.appendChild(greenSpan);

    const loanInterest = document.createElement("p");
    loanInterest.innerText = "Loan interest: " + item.loan_interest_rate;
    items.appendChild(loanInterest);

    const btn = document.createElement("button");
    btn.innerText = "Favourite";
    items.appendChild(btn);
    btn.addEventListener("click", function(){
        Favourite(item.name);
    });

    const img = document.createElement("img")
    img.src = "Icon.png";
    header.appendChild(img);
    img.classList.add("icon");

    newElement.appendChild(header);
    newElement.appendChild(items);
    document.querySelector("#container").appendChild(newElement);
    newElement.classList.add("cards");
    header.classList.add("head");
    items.classList.add("content");
    btn.classList.add("favouriteBtn");

    if (item.overall_score > 55) {
        btn.style.backgroundColor = "#21C55D";
        greenSpan.style.color = "#21C55D";
        header.style.color = "#21C55D";
    } else {
        if (item.overall_score <= 55 && item.overall_score >= 30) {
            btn.style.backgroundColor = "#F97315";
            greenSpan.style.color = "#F97315";
            header.style.color = "#F97315";
        } else {
            if (item.overall_score < 30) {
                btn.style.backgroundColor = "#3C82F6";
                greenSpan.style.color = "#3C82F6";
                header.style.color = "#3C82F6";
            }
        }
    }
}

function renderBankCards(banks) {
    const container = document.querySelector("#container");
    container.innerHTML = "";

    banks.forEach(item => {
        createBankCard(item);
    });
}

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", SearchBanks);

function SearchBanks() {
    const text = searchInput.value.toUpperCase();
    const filteredBanks = banks.banks.filter(item => item.name.toUpperCase().includes(text));

    if (text.length === 0) {
        renderBankCards(banks.banks);
    } else {
        renderBankCards(filteredBanks);
    }
}

renderBankCards(banks.banks);

let favouritebanks = [];
let favCounter = document.querySelector(".FavCounter");

function FavCounterNum(){
    favCounter.innerText = favouritebanks.length;
}

function Favourite(bankName){
    const index = favouritebanks.indexOf(bankName);
    if (index === -1){ // - Pokud bankname není v poli, vyhodí to -1
        favouritebanks.push(bankName);
    }else{
        favouritebanks.splice(index, 1) // to 1 je "deleteCount" - počet prvků co se má odstranit. Pokud NEDÁM 1, VYMAŽE SE VŠE ZA TÍM
    }
    FavCounterNum();
}

FavCounterNum();