// Test data
// Data 1
const dolphinsScores1 = [96, 108, 89];
const koalasScores1 = [88, 91, 110];

// Data Bonus 1
const dolphinsScores2 = [97, 112, 101];
const koalasScores2 = [109, 95, 123];

// Data Bonus 2
const dolphinsScores3 = [97, 112, 101];
const koalasScores3 = [109, 95, 106];

// Function to calculate average score
const calculateAverage = (scores) => scores.reduce((sum, score) => sum + score, 0) / scores.length;

// Function to determine the winner
const determineWinner = (dolphins, koalas) => {
  const avgDolphins = calculateAverage(dolphins);
  const avgKoalas = calculateAverage(koalas);

  // Bonus 1: Check for minimum score requirement
  if (avgDolphins >= 100 && avgKoalas >= 100) {
    // Bonus 2: Check for draw with minimum score requirement
    if (avgDolphins === avgKoalas) {
      return "It's a draw!";
    }

    return avgDolphins > avgKoalas ? "Dolphins win!" : "Koalas win!";
  } else {
    return "No team wins the trophy!";
  }
};

// Test the data
console.log("Data 1:", determineWinner(dolphinsScores1, koalasScores1));
console.log("Data Bonus 1:", determineWinner(dolphinsScores2, koalasScores2));
console.log("Data Bonus 2:", determineWinner(dolphinsScores3, koalasScores3));
