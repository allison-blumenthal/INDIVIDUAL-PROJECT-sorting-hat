
const cats = [
  {
    id: 1,
    name: "Minky",
    house: "Hufflepuff"
  },
  {
    id: 2,
    name: "Lilah",
    house: "Ravenclaw"
  },
  {
    id: 3,
    name: "Maxx",
    house: "Slytherin"
  },
  {
    id: 4,
    name: "Azure",
    house: "Griffindor"
  },
  {
    id: 5,
    name: "Harriet",
    house: "Hufflepuff"
  },
  {
    id: 6,
    name: "Rhyme",
    house: "Ravenclaw"
  },
  {
    id: 7,
    name: "Ernesto",
    house: "Slytherin"
  },
  {
    id: 8,
    name: "Ferdinand",
    house: "Griffindor"
  }
]

// dynamically rendering to the DOM

const renderToDom = (divId, htmlToRender) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = htmlToRender;
};

const catsOnDom = (array) => {
  let domString = "";
  for (const cat of array) {
    domString +=
      `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${cat.house}</h5>
          <p class="card-text">${cat.name}</p>
          <a href="#" class="btn btn-primary">Expel!</a>
        </div>
      </div>`
    }

    renderToDom("#app", domString);
}

catsOnDom(cats);


// clicking the first button to get to form

const sortMyCatBtn = document.querySelector("#sortMyCatBtn");

sortMyCatBtn.addEventListender('click', () => {
  // put function to render form here
})

// form to input name and create new house card 

const form = document.querySelector('form');

const sortCat = (e) => {
  e.preventDefault();

  const assignHouse = () => {
    let houseNum = Math.floor(Math.random() * 4) + 1;

    if (houseNum === 1) {
      return "Gryffindor"
      } else if (houseNum === 2) {
      return "Slytherin"
      } else if (houseNum === 3) {
      return "Hufflepuff"
      } else {
      return "Ravenclaw"
      }
  };

  const newCatObj = {
    id: cats.length + 1,
    name: document.querySelector("#name").value,
    house: assignHouse();      
  }

  cats.push(newCatObj);
  catsOnDom(cats);
  form.reset();
}

const submitButton = document.querySelector("#submit-button");

form.addEventListener('submit', sortCat);
