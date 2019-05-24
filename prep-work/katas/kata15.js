const generateBoard = (whiteQueen, blackQueen) => {
  var board = [];
  for (var i = 0; i < 8; i++) {
    var row = [];
    for (var j = 0; j < 8; j++) {
      row.push(0);
    }
    board.push(row);
  }
  board[whiteQueen[1]][whiteQueen[0]] = 1;
  board[blackQueen[1]][blackQueen[0]] = 1;
  return board;
}

const queenThreat = (board) => {
  queen = [];
  for (var i = 0; i < board.length; i++) {
    if (board[i].indexOf(1) > -1) {
      queen.push([board[i].indexOf(1), i]);
    }
  }
  return Math.abs(queen[0][0] - queen[0][1]) == Math.abs(queen[1][0] - queen[1][1]) || queen[0][0] == queen[1][0] || queen[0][1] == queen[1][1] || Math.abs(queen[0][0] + queen[0][1]) == Math.abs(queen[1][0] + queen[1][1]);
}

var whiteQueen = [3, 3];
var blackQueen = [4, 4];
var generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

var whiteQueen = [5,5];
var blackQueen = [4,4];
var generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard)
console.log(queenThreat(generatedBoard));

var whiteQueen = [3,5];
var blackQueen = [4,4];
var generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard)
console.log(queenThreat(generatedBoard));

var whiteQueen = [5,3];
var blackQueen = [4,4];
var generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard)
console.log(queenThreat(generatedBoard));

var whiteQueen = [0,5];
var blackQueen = [5,0];
var generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard)
console.log(queenThreat(generatedBoard));

var whiteQueen = [0,0];
var blackQueen = [7,5];
var generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard)
console.log(queenThreat(generatedBoard));
