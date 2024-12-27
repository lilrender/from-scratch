'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};


function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ""),
      b = prompt('На сколько бы оценили его?', "");
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done!');
    } else {
      console.log('error!');
      i--;
    }
  };

}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Мало');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Средне');
  } else if (personalMovieDB.count >= 30) {
    console.log('Киноман');
  } else {
    console.log('ошибка');
  }
}

detectPersonalLevel();

const showMyDB = function(){
  if(personalMovieDB.privat == false){
    console.log(personalMovieDB);
  } else {
    console.log('access denied');
  }
};

showMyDB();

function writeYourGenres() {
  for (let i=0; i<3; i++) {
    const  favGenre = prompt(`Ваш любимый жанр под номером ${i+1}`)
    personalMovieDB.genres.push(favGenre);
    //personalMovieDB.genres[i - 1] = favGenre;
    //personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}
writeYourGenres();


// let i = 0;
// while(i < 2) {
//   const a = prompt('Один из последних просмотренных фильмов?', ""),
//         b = prompt('На сколько бы оценили его?', "");
//    if(a != null && b != null && a != '' && b != '' && a.length < 50){
//      personalMovieDB.movies[a] = b;
//      console.log('done!');
//      i++;
//    } else {
//      console.log('error!');
//      i--;
//    }
// }
// let i = 0;
// do {
//   const a = prompt('Один из последних просмотренных фильмов?', ""),
//     b = prompt('На сколько бы оценили его?', "");
//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log('done!');
//     i++;
//   } else {
//     console.log('error!');
//     i--;
//   }
// } while (i < 2);



 
// num = 0;
// function sum (a, b) {
//   num = a+b;
//   console.log(num);
// }
// sum(3, 4);

// function calc (a, b) {
//   return(a + b);
//   console.log('ddfdfd');//unreachable code
// };

// console.log(calc(4445466, 98980980));

// function ret() {
//   num = 4454;

//   //

//   return num;
// }//точка с запятой не ставится  в function declaration

// const anotherNun = ret();
// console.log(anotherNun);



// const logger = function() {
//   console.log('hi');
// };// в  function expression ставится точка с запятой

// logger();

// const calc = (a, b) => {
//   console.log('fddfd');
//   return a + b;
// };

// const short = a => a + 6;

// console.log(short(4));
// const num = 44.55;
// console.log(Math.round(num));






// const num = 60;

// (num === 60) ? console.log('Ok!') : console.log('Error');//тернарный оператор(3 аргумента)

// switch(num) {
//     case 46:
//       console.log('error');//если num = 46, ошибка
//       break;//обязательно после каждого кейса
//     case 100:
//       console.log('error');
//       break;
//     case 60:
//       console.log('match');
//       break;
//     default:
//       console.log('not today');//если ничего не подошло
//       break;
// };

//  let dig = 50;

// while(dig <= 55) {
//     console.log(dig);
//     dig++;
// }

// do{
//   console.log(dig);
//   dig++;
// }
// while(dig < 55);

// let key = 4;
// for (let i = 1; i < 5; i++) {
//     console.log(key);
//     key++;
// };

// for (let i = 1; i< 10; i++) {
//     if(i===6) {
//       //break; //прерывает цикл после 6го повторения
//       continue;//пропускает ненужный шаг
//     }
//     console.log(i);
// }