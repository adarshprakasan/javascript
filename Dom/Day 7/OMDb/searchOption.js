async function searchOption() {
  let displayString = document.getElementById("displayString");
  let goToHome = document.getElementById("goToHome");
  let movieList = document.getElementById("movieList");
  if (movieList.innerHTML) {
    movieList.innerHTML = "";
  }

  try {
    let searchString = document.getElementById("searchString").value;
    console.log(searchString);

    let movies = await fetch(
      `https://www.omdbapi.com/?s=${searchString}&apikey=428f8624`
    );
    movies = await movies.json();

    if (movies) {
      let moviesList = Object.values(movies.Search);
      console.log(moviesList);

      displayString.innerHTML = `<h1>Search results for "${searchString}"`;
      goToHome.innerHTML = `<a class="miniLink" href="./index.html">Go to Home</a>`;
      moviesList.map(({ Title, Type, Poster, Year }) => {
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
        img.src = Poster;
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

searchOption();
