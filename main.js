// array for created objects
const cats = [
  {
    id: 1,
    name: "Minky",
    house: "Hufflescruff"
  },
  {
    id: 2,
    name: "Lilah",
    house: "Ravenpaw"
  },
  {
    id: 3,
    name: "Maxx",
    house: "Litterin'"
  },
  {
    id: 4,
    name: "Azure",
    house: "Kittendor"
  },
  {
    id: 5,
    name: "Harriet",
    house: "Hufflescruff"
  },
  {
    id: 6,
    name: "Rhyme",
    house: "Ravenpaw"
  },
  {
    id: 7,
    name: "Ernesto",
    house: "Litterin'"
  },
  {
    id: 8,
    name: "Ferdinand",
    house: "Kittendor"
  }
];

// array for expelled cats
const expelled = [];

// array for randomly assigning houses
const catHouses = ["Kittendor", "Litterin'", "Ravenpaw", "Hufflescruff"];

// rendering to the DOM
const renderToDom = (divId, htmlToRender) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = htmlToRender;
};

// getting cards on the DOM
const catsOnDom = (array) => {
  let domString = "";

  for (const cat of array) {
    domString += `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${cat.house}</h5>
          <h2 class="card-text">${cat.name}</h2>
          <button type="button" class="btn btn-dark" id="expel--${cat.id}">Expel!</button>
        </div>
      </div>`
    }

    renderToDom("#goodCats", domString);
};

const expelledOnDom = (array) => {
  let domString = "";

  for (const cat of array) {
    domString += 
      `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h2 class="bad-cat-card-title">${cat.name}</h2>
        </div>
      </div>`
  }

  renderToDom("#badCats", domString);
}

// getting the form on DOM 
const formOnDom = () => {
  const domString = 
    `<div class="form-floating mb-3">
      <input type="text" class="form-control" id="name" placeholder="cat-name">
      <label for="floatingInput">Your Cat's Name</label>
    </div>
    <button type="submit" class="btn btn-success">Sort My Cat</button>`;

  renderToDom('form', domString);
}

// rendering button on DOM to open form  
const formButton = () => {
  const domString = `<form>
    <button type="button" class="btn btn-info" id="open-form">Let's Get Sorted</button>
  </form>`

  renderToDom("#form", domString);
}

// create unique ids for new cats
const createId = (array) => {
  if (array.length) {
    const idArray = [];
    for (const el of array) {
      idArray.push(el.id);
    }
    return Math.max(...idArray) + 1;
  } else {
    return 0;
  }
}

// tasks to create new object for form entry 
const formTasks = () => {

  const form = document.querySelector('form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const newCat = {
      id: createId(cats),
      name: document.querySelector("#name").value,
      house: catHouses[Math.floor(Math.random() * catHouses.length)]
    };

    cats.push(newCat);
    catsOnDom(cats);

    form.reset();
  });
};

// click button to show form 
const showForm = () => {
  document.querySelector("#open-form").addEventListener('click', formOnDom);
}


// click the "Expel!" button to send cat to the Dark Side
const expelACat = () => {
  const sortedCatsDiv = document.querySelector("#goodCats");

  sortedCatsDiv.addEventListener('click', (e) => {
    if(e.target.id.includes("expel")) {
      const [, id] = e.target.id.split('--');

      const index = cats.findIndex(cat => cat.id === Number(id));

      const expelledCat = cats.splice(index, 1);

      expelled.push(expelledCat[0]);

      catsOnDom(cats);
      expelledOnDom(expelled);
    }
  })
}

expelACat();

// filtering by house with buttons 
const buttonFilters = () => {
  const filters = document.querySelector("#house-filters");

  filters.addEventListener('click', (e) => {
    if(e.target.id.includes("house--")) {
      const [, id] = e.target.id.split('--');

      const numId = Number(id);

      const catHousesArray = cats.filter(cat => cat.house === catHouses[numId]);
      catsOnDom(catHousesArray);
    }
  })
}

// start app function
const startApp = () => {
  catsOnDom(cats);
  expelledOnDom(expelled);
  formButton();
  showForm();
  formTasks();
  buttonFilters();
}

startApp();
