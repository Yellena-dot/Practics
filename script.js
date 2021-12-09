/*
создать переменную numberOfFilms и в нее поместить ответ от пользователя на вопрос: "Сколько фильмов вы уже посмотрели?"
*/
const numberOfFilms = +prompt('How many films do you already see?', '');

/*
2) Создать обьект personalMovieDB ив него поместить такие свойства:
- count - сюда передаются ответ на первый вопрос
- movies - в это св-во поместить пустой обьект
- actors - тоже поместить пустой обьект
- genres- сюда поместить пустой массив
- privat - в это св-во поместить boolean(логическое) значение false

3) задайте пользователю по два раза вопросы:
- 'Один из последних просмотренных фильмов?
- 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
записать ответы в обьект movies в формате:
movies: {
  'Logan': '8.1'
}
*/
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
  b = prompt('На сколько оцените его?', ''),
  c = prompt('Один из последних просмотренных фильмов?', ''),
  d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
