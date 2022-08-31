const loadPhones = (buttonValue) => {
    const URL = `https://openapi.programming-hero.com/api/phones?search=${buttonValue}`;
    fetch(URL)
        .then((res) => res.json())
        .then((data) => displayPhones(data.data));
};

const displayPhones = (phones) => {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = " ";
    // ----------Error Condition------------->
    const error = document.getElementById("error");
    if (phones.length === 0) {
        error.classList.remove("d-none");
    } else {
        error.classList.add("d-none");
    }
    phones.forEach((phone) => {
        const phoneDiv = document.createElement("div");
        phoneDiv.classList.add("col");
        phoneDiv.innerHTML = `
            <div class="card h-100">
                <img src="${phone.image}" class="card-img-top p-5" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <p class="card-text">
                        This is a longer card with supporting text below
                        as a natural lead-in to additional content. This
                        content is a little bit longer.
                    </p>
                </div>
            </div>
        `;
        cardContainer.appendChild(phoneDiv);
    });
};
document.getElementById("button").addEventListener("click", function (e) {
    e.preventDefault();
    const buttonField = document.getElementById("btn-field");
    const buttonValue = buttonField.value;
    loadPhones(buttonValue);
});

// loadPhones();
