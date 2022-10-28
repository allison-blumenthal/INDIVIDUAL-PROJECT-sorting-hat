// array for created objects
const cats = [
  {
    id: 1,
    name: "Minky",
    house: "Hufflscruff"
  },
  {
    id: 2,
    name: "Lilah",
    house: "Ravenpaw"
  },
  {
    id: 3,
    name: "Maxx",
    house: "Litterin"
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
    house: "Litterin"
  },
  {
    id: 8,
    name: "Ferdinand",
    house: "Kittendor"
  }
];

// array for randomly assigning houses
const catHouses = ["Kittendor", "Litterin'", "Ravenpaw", "Hufflescruff"];


// array for expelled cats
const expelled = [];

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
          <p class="card-text">${cat.name}</p>
          <button type="button" class="btn btn-dark" id="expel--${cat.id}">Expel!</button>
        </div>
      </div>`
    }

    renderToDom("#cats", domString);
};

const expelledOnDom = (array) => {
  let domString = "";

  for (const cat of array) {
    domString += 
      `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${cat.name}</h5>
        </div>
      </div>`
  }

  renderToDom("#expelled", domString);
}

// getting the form on DOM 
const formOnDom = () => {
  const domString = 
    `<div class="form-floating mb-3">
      <input type="text" class="form-control" id="floatingInput" placeholder="cat-name">
      <label for="floatingInput">Your Cat's Name</label>
    </div>`

  renderToDom('form', domString);
}

// rendering button on DOM that opens form  
const formButton = () => {
  const domString = `<form>
    <button type="button" class="btn btn-info" id="open-form">Let's Get Sorted</button>
  </form>`

  renderToDom("#form", domString);
}

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

const formTasks = () => {

  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    


  }
}






  

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







// start app function
const startApp = () => {
  catsOnDom(cats);
  expelledOnDom(expelled);



}

startApp();
