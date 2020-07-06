// 200. Number of Islands

// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.



/**
 * @param {character[][]} grid
 * @return {number}
 */


 // use a helper function to convert all adjecent '1's to '0's
 
var numIslands = function(grid) {
    let numOfIsland = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++){
            if (grid[i][j] === '1') {
                helper(i,j);
                numOfIsland++;
            }
        }
    }
    
    function helper(i, j){
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === '0') return;
        
        grid[i][j] = '0';
        
        helper(i + 1, j); // down
        helper(i - 1, j); // up
        helper(i, j + 1); // right
        helper(i, j - 1); // left
    }
    
    return numOfIsland;
};