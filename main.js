
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

// clicking the first button to get to form

const sortMyCatBtn = document.querySelector("#sortMyCatBtn");

sortMyCatBtn.addEventListender('click', () => {
  // put function to render form here
})

const form = document.querySelector('form');

const catToSort = {
  id: cats.length + 1
}
