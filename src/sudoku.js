export function Sudoku (board) {
  this.board = board;
}
Sudoku.prototype.checkRow = function() {
  var outputRow = this.board[0].sort().join("");
  if (outputRow === [1, 2, 3, 4, 5, 6, 7, 8, 9].join("")) {
    return "Correct";
  }
};
Sudoku.prototype.checkAllRows = function() {
  //var output = this.board.sort().join("");
  for(var i = 0; i < this.board.length; i++){
    var hello = this.board[i].sort()
    var row = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for(var k = 0; k < hello.length; k++){
    if (hello[k] != row[k]){
          return "No";
    }
return "Yes";
  }

}



};

// Sudoku.prototype.checkAllRows = function() {
//   var output = this.board.sort();
//   for(var i = 0; i < this.board.length; i++){
//     this.board[i].sort()
//   }
//   if (arraysEqual(this.board[i], [1,2,3,4,5,6,7,8,9])){
//     return "Yes";
//   }
//
//   output = this.board;
//   console.log(output);
// }
// export function arraysEqual(a, b) {
//   if (a === b) return true;
//   if (a == null || b == null) return false;
//   if (a.length != b.length) return false;
//
//   // If you don't care about the order of the elements inside
//   // the array, you should sort both arrays here.
//
//   for (var i = 0; i < a.length; ++i) {
//     if (a[i] !== b[i]) return false;
//   }
//   return true;
// }
