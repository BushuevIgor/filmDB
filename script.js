let NumberOfFilms;

function start() {
    NumberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (NumberOfFilms == '' || NumberOfFilms == null || isNaN(NumberOfFilms)) {
        NumberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

// start();

let personalMovieDB = {
    count: NumberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};


function rememberMyFilms() {
for (let i = 0; i < 2; i++) {
    let a = prompt('один из последних просмотренных фильмов?',''),
        b = +prompt('на сколько оцените его?','');

        if( a != null && b != null && b != '' && a != '' && a.length < 50 ) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
}
}
// rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("вы киноман!");
    } else {
        console.log('произошла ошибка');
    }
}

// detectPersonalLevel();

function showmyDb() {
    if (personalMovieDB.private == false){
        console.log(personalMovieDB);
    }
}
showmyDb();

function writeYouGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i -1] = genre;

    }
}

writeYouGenres();

