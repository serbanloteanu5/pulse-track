/* 
   File: sophisticated_code.js
   Description: This code demonstrates a complex program that generates a Sudoku puzzle and solves it using backtracking algorithm.
*/

// Generate a Sudoku board
function generateBoard() {
  const board = [];
  
  // Initialize an empty board
  for (let i = 0; i < 9; i++) {
    board[i] = new Array(9);
  }
  
  // Generate random values for each cell
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      board[row][col] = getRandomNumber();
    }
  }
  
  return board;
}

// Check if a value is valid for a particular cell
function isValid(board, row, col, num) {
  // Check if the value already exists in the row
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === num) {
      return false;
    }
  }
  
  // Check if the value already exists in the column
  for (let i = 0; i < 9; i++) {
    if (board[i][col] === num) {
      return false;
    }
  }
  
  // Check if the value already exists in the corresponding 3x3 subgrid
  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;
  
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      if (board[startRow + r][startCol + c] === num) {
        return false;
      }
    }
  }
  
  return true; // The value is valid
}

// Solve the Sudoku puzzle using backtracking algorithm
function solveSudoku(board) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        for (let num = 1; num <= 9; num++) {
          if (isValid(board, row, col, num)) {
            board[row][col] = num; // Place the valid number
            
            if (solveSudoku(board)) {
              return true; // Puzzle solved
            }
            
            // Backtrack if the number doesn't lead to a solution
            board[row][col] = 0;
          }
        }
        
        return false; // No valid number found
      }
    }
  }
  
  return true; // Puzzle solved
}

// Generate a random number between 1 and 9 (inclusive)
function getRandomNumber() {
  return Math.floor(Math.random() * 9) + 1;
}

// Display the Sudoku puzzle
function displayBoard(board) {
  for (let row = 0; row < 9; row++) {
    let rowStr = "";
    for (let col = 0; col < 9; col++) {
      rowStr += `${board[row][col]} `;
      if (col === 2 || col === 5) {
        rowStr += "| ";
      }
    }
    console.log(rowStr);
    if (row === 2 || row === 5) {
      console.log("- - - + - - - + - - -");
    }
  }
}

// Generate and solve a Sudoku puzzle
console.log("Generated Sudoku Puzzle:");
const puzzle = generateBoard();
displayBoard(puzzle);

console.log("\nSolving the Puzzle...");
const startTime = performance.now();
solveSudoku(puzzle);
const endTime = performance.now();

console.log("\nSolved Sudoku Puzzle:");
displayBoard(puzzle);

console.log("\nExecution Time:", endTime - startTime, "milliseconds");