//all edge numbers are 1
//row # indicates # of nodes in row
//all other nodes are sum of nodes above left and right
function getTriangle(totalRows) {
  let currentRow = 0,
    row,
    prevRow,
    rows = new Array(totalRows);
  while(currentRow < totalRows) {
    row = rows[currentRow] = [];
    row.push(1);
    if(currentRow > 1) {
      prevRow = rows[currentRow - 1];
      let prevCol = 0;
      while(prevCol < prevRow.length - 1) {
        row.push(prevRow[prevCol] + prevRow[prevCol + 1]);
        prevCol++;
      }
    }
    if(currentRow > 0) {
      row.push(1);
    }
    currentRow++;
  }

  return rows;
}

console.log(getTriangle(7))
