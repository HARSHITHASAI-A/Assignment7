//STEP 1
var movies = ["Joker", "Midway", "Titanic", "Hustlers", "Lion King"];
document.writeln(movies[1]);

//STEP 2
var movies = new Array(5);
movies[0] = "Joker";
movies[1] = "Midway";
movies[2] = "Titanic";
movies[3] = "Hustlers";
movies[4] = "Lion King";
document.writeln(movies[0]);

//STEP 3
var movies = new Array(5);
movies[0] = "Joker";
movies[1] = "Midway";
movies[2] = "Titanic";
movies[3] = "Hustlers";
movies[4] = "Lion King";
movies.splice(2, 0, "Avengers");
document.writeln(movies.length);

//STEP 4
var movies = [];
movies[0] = "Joker";
movies[1] = "Midway";
movies[2] = "Titanic";
movies[3] = "Hustlers";
movies[4] = "Lion King";
movies.splice(0, 1);
document.writeln(movies);

//STEP 5
movies = [];
movies[0] = "Joker";
movies[1] = "Midway";
movies[2] = "Titanic";
movies[3] = "Hustlers";
movies[4] = "Lion King";
movies[5] = "Fast and Furious";
movies[6] = "King Kong";
var i;
for ( i= 0; i < movies.length; i += 1) {
    document.writeln(movies[i]);
}

//STEP 6

movies = [];
movies[0] = "Joker";
movies[1] = "Midway";
movies[2] = "Titanic";
movies[3] = "Hustlers";
movies[4] = "Lion King";
movies[5] = "Fast and Furious";
movies[6] = "King Kong";
var i;
for (i in movies) {
    window.console.log(movies[i]);
}

//STEP 7
movies = [];
movies[0] = "Joker";
movies[1] = "Midway";
movies[2] = "Titanic";
movies[3] = "Hustlers";
movies[4] = "Lion King";
movies[5] = "Fast and Furious";
movies[6] = "King Kong";
movies.sort();
for (var i in movies) {
    document.writeln(movies[i]);
}

//STEP 8
movies = [];
movies[0] = "Joker";
movies[1] = "Midway";
movies[2] = "Titanic";
movies[3] = "Hustlers";
movies[4] = "Lion King";
movies[5] = "Fast and Furious";
movies[6] = "King Kong";
leastFavMovies = [];
leastFavMovies[0]="The Room";
leastFavMovies[1]="Maniac";
leastFavMovies[2]="Robot Monster"
document.writeln("\n");
document.writeln("Movies I like:");
document.writeln("\n");
for (movie in movies) {
    document.writeln(movies[movie]);
}
document.writeln("\n");
document.writeln("Movies I regret watching:");
document.writeln("\n");
for (movie in leastFavMovies) {
    document.writeln(leastFavMovies[movie]);
}
document.writeln("\n");


//STEP 9

movies = [];
movies[0] = "Joker";
movies[1] = "Midway";
movies[2] = "Titanic";
movies[3] = "Hustlers";
movies[4] = "Lion King";
movies[5] = "Fast and Furious";
movies[6] = "King Kong";
leastFavMovies = [];
leastFavMovies[0]="The Room";
leastFavMovies[1]="Maniac";
leastFavMovies[2]="Robot Monster"
movies = movies.concat(leastFavMovies);
movies.sort();
movies.reverse();
for (index in movies) {
    document.writeln(movies[index]);
}

//STEP 10

movies = [];
movies[0] = "Joker";
movies[1] = "Midway";
movies[2] = "Titanic";
movies[3] = "Hustlers";
movies[4] = "Lion King";
movies[5] = "Fast and Furious";
movies[6] = "King Kong";
leastFavMovies = [];
leastFavMovies[0]="The Room";
leastFavMovies[1]="Maniac";
leastFavMovies[2]="Robot Monster"
movies = movies.concat(leastFavMovies);
movies.sort();
movies.reverse();
document.writeln(movies.pop());