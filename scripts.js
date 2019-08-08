
document.getElementById('getGhibliFilms').addEventListener('click', getGhibliFilms);

function getGhibliFilms(){

     fetch('https://ghibliapi.herokuapp.com/films ')
        .then((res) => { return res.json() })
        .then((data) => {
            let result = 
            `<h1> List of movies by Studio Ghibli</h1>`;
            data.forEach((movie) => {
                const { title, description, release_date } = movie
                result +=
            `
			<div class="column">
	            <div class="card">
	                <h2>${title} </h2>
	                <h3><strong>Release Date:</strong> ${release_date} </h3>
	                <p><strong>Description:</strong> ${description}</p>
	            </div>
			</div>
            `;
        	document.getElementById('result').innerHTML = result;
            });
        }) 
      }