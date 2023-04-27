'use strict';

const SudokuSolver = require('../controllers/sudoku-solver.js');

module.exports = function (app) {
  
  let solver = new SudokuSolver();

  app.route('/api/check')
    .post((req, res) => {
      const { puzzle, coordinate, value } = req.body;
      console.log(puzzle, coordinate, value, "puzzle, coordinate, value from check API");
      const row = coordinate[0];
      const column = coordinate[1];
      const result = solver.checkRowPlacement(puzzle, row, column, value);
      res.send(result);

    });
    
    app.route('/api/solve')
    .post((req, res) => {
      const { puzzle } = req.body;
      console.log(puzzle, "puzzlefrom solve API");
      const result = solver.solve(puzzle);
      res.send(JSON.stringify({solution: result}));
      

    });
};
