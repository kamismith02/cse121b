/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Kami Smith",
    photo: 'images/profile.jpg',
    favoriteFoods: [
        'tacos', 
        'burgers', 
        'ice cream', 
        'chocolate'
    ],
    hobbies: [
        'tennis',
        'puzzles',
        'movies',
        'baking'
    ],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'West Valley, UT',
        length: '5 years'
    }
);

myProfile.placesLived.push(
    {
        place: 'Stansbury Park, UT',
        length: '14 years'
    }
);

myProfile.placesLived.push(
    {
        place: 'Charleston, WV',
        length: '9 months'
    }
);

myProfile.placesLived.push(
    {
        place: 'Roanoke, VA',
        length: '9 months'
    }
);

myProfile.placesLived.push(
    {
        place: 'Orem, UT',
        length: '6 months'
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
const imageElement = document.querySelector('img');
imageElement.setAttribute("src", myProfile.photo);
imageElement.setAttribute("alt", `Profile image of ${myProfile.name}`);
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });

/* Places Lived DataList */
myProfile.placesLived.forEach(places => {
    let dt = document.createElement('dt');
    dt.textContent = places.place;
    document.querySelector('#places-lived').appendChild(dt);
    let dd = document.createElement('dd');
    dd.textContent = places.length;
    document.querySelector('#places-lived').appendChild(dd);
  });
