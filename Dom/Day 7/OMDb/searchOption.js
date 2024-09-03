let searchString = document.getElementById("searchString");
searchString.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    searchOption();
  }
});

// ====================================================

let pagenumber = 1;
let prevPg = document.getElementById("prevPg");
let nextPg = document.getElementById("nextPg");
function nextPage() {
  pagenumber++;
  console.log(pagenumber);
  searchOption();
}

function prevPage() {
  if (pagenumber > 1) {
    pagenumber--;
    console.log(pagenumber);
    searchOption();
  }
}

// ====================================================

let timeout;
searchString.addEventListener("input", () => {
  let searchingString = searchString.value.trim();
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    if (searchingString === "") {
      searchOption();
    } else {
      searchOption(searchingString);
      console.log("Hello");
    }
  }, 700);
});

// ====================================================

async function searchOption() {
  let displayString = document.getElementById("displayString");
  let goToHome = document.getElementById("goToHome");
  let movieList = document.getElementById("movieList");

  try {
    let searchString = document.getElementById("searchString").value;
    console.log(searchString);

    console.log(
      `https://www.omdbapi.com/?s=${searchString}&page=${pagenumber}&apikey=428f8624`
    );

    let movies = await fetch(
      `https://www.omdbapi.com/?s=${searchString}&page=${pagenumber}&apikey=428f8624`
    );
    movies = await movies.json();
    movies = await movies.Search;
    movieList.innerHTML = "";

    if (pagenumber === 1) {
      prevPg.style.display = "none";
      nextPg.style.display = "block";
    } else {
      prevPg.style.display = "block";
      nextPg.style.display = "block";
    }

    if (movies === undefined && !movieList.innerHTML) {
      displayString.innerHTML = `<h1>No results for "${searchString}"`;
      goToHome.innerHTML = `<a class="miniLink" href="./index.html">Go to Home</a>`;
    }

    if (movies) {
      displayString.innerHTML = `<h1>Search results for "${searchString}"`;
      goToHome.innerHTML = `<a class="miniLink" href="./index.html">Go to Home</a>`;

      movies.map(({ Title, Type, Poster, Year }) => {
        let cardContainer = document.createElement("div");
        cardContainer.className = "cardContainer";
        let movieCard = document.createElement("div");
        movieCard.className = "movieCard";
        let movieName = document.createElement("div");
        movieName.className = "movieName";
        let moviePoster = document.createElement("div");
        moviePoster.className = "moviePoster";
        let movieTitle = document.createElement("div");
        movieTitle.className = "movieTitle ";

        let img = document.createElement("img");
        if (Poster === "N/A") {
          img.src = "./noimgavlb.png";
        } else {
          img.src = Poster;
        }
        moviePoster.append(img);

        movieName.innerHTML = `<h2>${Title} (${Type})</h2>`;
        movieTitle.innerHTML = `${Year}`;

        movieCard.append(moviePoster, movieName, movieTitle);
        cardContainer.append(movieCard);

        movieList.prepend(cardContainer);
      });
    }
  } catch (err) {
    console.log(err.message);
  }
}
