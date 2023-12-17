
const dolphinsScores1 = [96, 108, 89];
const koalasScores1 = [88, 91, 110];


const dolphinsScores2 = [97, 112, 101];
const koalasScores2 = [109, 95, 123];


const dolphinsScores3 = [97, 112, 101];
const koalasScores3 = [109, 95, 106];

const avgDolphins = (dolphinsScores1[0]+dolphinsScores1[1]+dolphinsScores1[2]+dolphinsScores2[0]+dolphinsScores2[1]+dolphinsScores2[2]+ dolphinsScores3[0]+dolphinsScores3[1]+dolphinsScores3[2])/9;
const avgKoalas = (koalasScores1[0]+koalasScores1[1]+koalasScores1[2]+koalasScores2[0]+koalasScores2[1]+koalasScores2[2]+koalasScores3[0]+koalasScores3[1]+koalasScores3[2])/9;
  
  if (avgDolphins>avgKoalas){
    console.log("Winner is dolphins!")
  } else if (avgKoalas>avgDolphins) {
    console.log("The winner is Koalas!")
  } else {
    console.log('Its a draw')
  };