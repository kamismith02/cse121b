const apiUrl = "https://run.mocky.io/v3/83bb307f-ee68-4f0b-863f-59a2a2d059b2";

const searchInput = document.getElementById("searchInput");
const superheroList = document.getElementById("superheroList");

// Fetch superhero data
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Display all superheroes initially
        displaySuperheroNames(data);

        // Add event listener for input changes
        searchInput.addEventListener("input", () => {
            const searchTerm = searchInput.value.toLowerCase();
            const filteredSuperheroes = data.filter(hero => hero.name.toLowerCase().includes(searchTerm));

            if (searchTerm.trim() === "") {
                displaySuperheroNames(data);
            } else {
                displaySuperheroes(filteredSuperheroes);
            }
        });
    })
    .catch(error => console.error("Error fetching superhero data:", error));

function displaySuperheroNames(superheroes) {
    superheroList.innerHTML = "";

    superheroes.forEach(hero => {
        const li = document.createElement("li");
        li.textContent = hero.name;
        superheroList.appendChild(li);
    });
}

function displaySuperheroes(superheroes) {
    superheroList.innerHTML = "";

    if (superheroes.length === 0) {
        superheroList.innerHTML = "<p>No superheroes found</p>";
    } else {
        superheroes.forEach(hero => {
            const li = document.createElement("li");
            li.classList.add("superhero");
            li.innerHTML = `
                <h2>${hero.name}</h2>
                <p>ID: ${hero.id}</p>
                <p>Powerstats:</p>
                <ul>
                    <li>Combat: ${hero.powerstats.combat}</li>
                    <li>Durability: ${hero.powerstats.durability}</li>
                    <li>Intelligence: ${hero.powerstats.intelligence}</li>
                    <li>Power: ${hero.powerstats.power}</li>
                    <li>Speed: ${hero.powerstats.speed}</li>
                    <li>Strength: ${hero.powerstats.strength}</li>
                </ul>
                <p>Group Affiliation: ${hero.connections.groupAffiliation}</p>
                <p>Relatives: ${hero.connections.relatives}</p>
                <p>Occupation: ${hero.work.occupation}</p>
            `;

            superheroList.appendChild(li);
        });
    }
}