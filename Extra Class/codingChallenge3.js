
const dolphinsScores1 = [96, 108, 89];
const koalasScores1 = [88, 91, 110];


// const dolphinsScores2 = [97, 112, 101];
// const koalasScores2 = [109, 95, 123];


// const dolphinsScores3 = [97, 112, 101];
// const koalasScores3 = [109, 95, 106];

const avgDolphins = (dolphinsScores1[0]+dolphinsScores1[1]+dolphinsScores1[2])/3;
const avgKoalas = (koalasScores1[0]+koalasScores1[1]+koalasScores1[2])/3;
  
  if (avgDolphins>avgKoalas && avgDolphins>=100){
    console.log("Winner is dolphins!")
  } else if (avgKoalas>avgDolphins && avgKoalas >=100) {
    console.log("The winner is Koalas!")
  } else if(avgDolphins === avgKoalas && avgDolphins >= 100) {
    console.log('Its a draw')
  } else {
    console.log(`No team Wins!`)
  }