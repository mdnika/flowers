const flowersContainerElement = document.getElementById("flowers-container");

async function loadFlowers() {
    const res = await fetch(
        "https://mdnika.github.io/book-api/flowers.json"
    );
    const flowers = await res.json();
    console.log(flowers);
    flowers.forEach((flower) => {
        const { name, color, description, image, maxHeight } = flower;
const cardElement = document.createElement("div");
cardElement.className = "card";
const nameElement = document.createElement("span");
//nameElement.className = "card-element";
nameElement.classList.add("card-element", "title");
const imgElement = document.createElement("img");
imgElement.className = "card-element";
imgElement.src = image;
nameElement.textContent = name;
cardElement.append(nameElement, imgElement);
flowersContainerElement.append(cardElement);
    });
}

loadFlowers();