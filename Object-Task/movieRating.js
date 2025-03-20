const prompt = require('prompt-sync')();

function printMenu() {
    const menu = `
    Welcome to Semicolon Movie Rating App
    ------------------------------------------
    1. Add a movie
    2. Rate a movie
    3. View Average Ratings
    4. Exit
    `;
    console.log(menu);
}

function validateAddMovie(movie) {
    return movie.trim() !== "";
}

function checkMovieExist(movie, addMovie) {
    return movie in addMovie;
}

function validateRatings(ratings) {
    return ratings >= 1 && ratings <= 5;
}

function checkMovieExistance(myDict, checkers) {
    return  checkers in myDict;
}

function getRatings(listRatings) {
    if (listRatings.length === 0) {
        return 0;
    }
    const sum = listRatings.reduce((acc, rating) => acc + rating, 0);
    return sum / listRatings.length;
}

function main() {
    let addMovie = {};
    let addRatings = {};
    let count = 0;
    let selection = 0;

    while (true) {
        printMenu();
        selection = parseInt(prompt("Enter a selection from (1-4): "));

        if (isNaN(selection) || selection < 1 || selection > 4) {
            console.log("Please enter a valid integer between 1 and 4.");
            continue;
        }

        if (selection === 1) {
            count += 1;
            while (true) {
                let movie = prompt("Enter the movie name: ");

                if (validateAddMovie(movie)) {
                    if (checkMovieExist(movie, addMovie)) {
                        console.log("Movie already exists.");
                    } else {
                        addMovie[movie] = { };
                        addRatings[movie] = { "ratings": [] };
                        break;
                    }
                } else {
                    console.log("Your movie can't be empty.");
                }
            }
            console.log("\nMovie added successfully.");

        } else if (selection === 2) {
            while (true) {
                let movieName = prompt("Enter the movie name: ");
if (checkMovieExistance(addMovie, movieName)) {
    let rating = parseFloat(prompt("Enter your rating (1-5): "));
    if (validateRatings(rating)) {
        addRatings[movieName].ratings.push(rating); 
        console.log(`Rating added for ${movieName} successfully.`);
         break;
    } else {
        console.log("Rating should be between 1 and 5.");
    }
} else {
    console.log("Movie does not exist.");
}
     }  
	 } else if (selection === 3) {

             let ratingsExist = false;
            
            
                for (let movie in addRatings) {
                  if(addRatings[movie].ratings.length > 0){
                    ratingsExist = true;
                    let averageRating = getRatings(addRatings[movie].ratings);
                    console.log(`Movie: ${movie} - Average Rating: ${averageRating.toFixed(2)}`);
                }
            }

        if(!ratingsExist){
   console.log("No ratings added yet.");
}

        } else if (selection === 4) {
            console.log("\nExiting the app.... Goodbye.");
            break;
        }
    }
}

main();
