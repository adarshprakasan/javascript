async function movieHome() {
  try {
    let movies = await fetch(
      "https://www.omdbapi.com/?s=avengers&apikey=428f8624"
    );
    movies = await movies.json();
    movies = await movies.Search;

    if (movies) {
      let movieList = document.getElementById("movieList");
      movieList.innerHTML = "";

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
movieHome();
