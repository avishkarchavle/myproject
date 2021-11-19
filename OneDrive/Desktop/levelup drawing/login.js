// console.log("hello , this is the first js file attached to the webpage");
// age = 35;
// console.log("bye,good night");
// if (2 + 3 === 5) {
//     console.log("math is working")
// }
// console.log("after post");
// let random = Math.random()
// if (random > 0.5) {
//     console.log("number is greater than o.5")
// }
// const clas = 7;
// if (clas < 5) {
//     console.log("you are a kid")
// } else if (clas < 79) {
//     console.log("you are adult")
// }
// day = prompt("enter the day").toLocaleLowerCase()
// if (day === 'monday') {
//     console.log("mondays are useless")
// } else if (day === 'tuesday') {
//     console.log("tuesdays are uhhh")
// } else {
//     console.log("remaining days are okayy")
// }
// password = prompt("enter the password");
// if (password.length >= 6) {
//     console.log("long enough password")
//     if (password.indexOf(' ') === -1) {
//         console.log("good to go with the password")
//     } else {
//         console.log("enter password with no spaces")
//     }
// } else {
//     console.log("password too short, enter 6+ letters")
// }

// for (i = 0; i < 5; i++) {
//     console.log("i");
//     for (j = 0; j < 7; j++) {
//         console.log("*");
//     }
// }
// secret = 'avi';
// guess = prompt("enter the secret word");
// while (secret != guess) {
//     guess = prompt("enter the secret word again !");
// }
// console.log("congrats you got the word !")
// let maxnum = parseInt(prompt("enter your maximum number"));
// while (!maxnum) {
//     maxnum = parseInt(prompt("enter a valid number"));
// }
// const targetNum = Math.floor(Math.random() * maxnum) + 1;
// console.log(targetNum);
// let guess = parseInt(prompt("enter your first guess"));
// let attempts = 1;

// while ((guess) != targetNum) {
//     attempts++;

//     if (guess > targetNum) {
//         guess = prompt("Too high !enter the lower number");
//     } else {
//         guess = prompt("Too short , enter the greater number");
//     }
// }

// console.log(`you got it ! It took you ${attempts} guesses`);
// if (guess == 'q') {
//     console.log("okay you Quit !")
// } else {
//     console.log(`you got it ! It took you ${attempts} guesses`)
// }

// function name() {
//     console.log('hello girls');
//     console.log('i am here');
//     console.log('to get u , alright !');
// }

// function hello(user) {
//     console.log(`hello ${user}`)

// }
// hello("avishkar")

// function add(u1, u2, u3) {
//     for (i = 0; i < u3; i++) {
//         console.log(`additon is ${u1+u2}`)
//         return u1 + u2;
//     }
// }

// add(2, 3, 4)
// a = ['thor', 'loki', 'iron man', 'captain america'];
// const marvel = function heroes() {



//     function back() {
//         function show() {
//             for (i = 0; i < 4; i++) {
//                 console.log(`GUYS, ${a[i]} I AM HERE TO SAVE YOU !`);
//             }
//             console.log('bye guys ..')
//         }
//         show();

//     }
//     back();


// }
// marvel();

// function isgreater(min, max) {
//     return function(num) {
//         return num >= min && num <= max;
//     }
// }
// const isadult = isgreater();

// const my = {
//     pi: 3.666,
//     square(n) {
//         return n * n;
//     },
//     cube(n2) {
//         return n2 ** 3;
//     }
// }
// console.log(my.cube(3))
// console.log(my.pi)
// console.log(my.square(2))

// up = a.map(function(a) {
//     console.log(a);
// })

// add = function(n1, n2) {
//     return n1 + n1;
// }

// console.log(add(3, 5))

// sub = (a, b) => {
//     return a - b;
// }
// console.log(sub(3, 5))

// multi = (a, b) => a * b;
// console.log(multi(3, 5));


// setTimeout(() => {
//     console.log("HELLO PASMND")
// }, 99)

// //same 

// setTimeout(() => console.log("HELLO PASMND"), 994)

// const movies = [

//     {
//         name: 'endgame',
//         year: 3242,
//         rating: 4
//     },
//     {
//         name: 'parasite',
//         year: 2334,
//         rating: 3
//     }
// ]

// const recentmovies = movies.filter(m => m.year > 2499)

// const goodmovies = movies.filter(m => m.rating = 3)

// const oldmovies = movies.reduce((bestmovie, currmovie) => {
//     if (currmovie.rating > bestmovie.rating) {
//         return currmovie;
//     }
//     return bestmovie;
// })

// ansk = [3, 4, 5, 6]
// console.log(ansk)

// const an = ansk.reduce((sum, k) => sum + an, 45)
// console.log(an)