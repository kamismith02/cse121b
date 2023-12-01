/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
        const article = document.createElement('article');
    
        const name = document.createElement('h3');
        name.textContent = temple.templeName;
    
        const image = document.createElement('img');
        image.src = temple.imageUrl;
        image.alt = temple.location;
    
        article.appendChild(name);
        article.appendChild(image);
    
        templesElement.appendChild(article);
      });
    };

/* async getTemples Function using fetch()*/
const getTemples = async () => {
      const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
      
      templeList = await response.json();
  
      displayTemples(templeList);
    }

/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
};

/* sortBy Function */
const sortBy = () => {
    reset();

    const filter = document.querySelector('#sortBy').value;

    switch (filter) {
        case "utah":
            displayTemples(templeList.filter((temple) => temple.location.includes('Utah')));
            break;
          case "notutah":
            displayTemples(templeList.filter((temple) => !temple.location.includes('Utah')));
            break;
          case "older":
            displayTemples(templeList.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
          case "all":
          default:
            displayTemples(templeList);
            break;
      }
  };

/* Event Listener */
document.querySelector('#sortBy').addEventListener('change', () => { 
    sortBy(templeList) 
});

getTemples();