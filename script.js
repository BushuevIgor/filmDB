let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start : function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
    },
    rememberMyFilms: function() {
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
        },
        detectPersonalLevel: function() {
            if (personalMovieDB.count < 10) {
                console.log("Просмотрено довольно мало фильмов");
            } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                console.log("Вы классический зритель");
            } else if (personalMovieDB.count > 30) {
                console.log("вы киноман!");
            } else {
                console.log('произошла ошибка');
            }
        },
        showmyDb: function() {
            if (personalMovieDB.private == false){
                console.log(personalMovieDB);
            }
        },
        toggleVisibleMyDB: function() {
            if (personalMovieDB.private) {
                personalMovieDB.private = false;
            } else {
                personalMovieDB.private = true; 
            }
        },

        writeYouGenres: function() {
            for (let i = 1; i <= 3; i++) {
                let genre = prompt(`Ваш любимый жанр под номером ${i}`);

                if (genre == '' || genre == null) {
                    console.log('вы ввели некорректные данные!');
                    i--;
                } else {
                    personalMovieDB.genres[i -1] = genre;

                }
                }
                personalMovieDB.genres.forEach((item, i) => {
                    console.log(`Любимый жанр ${i + 1} - это ${item}`)
                });
        }
};






