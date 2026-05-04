/**
 * @param {string[][]} grid
 * @param {number} islandCount
 * @param {number} x
 * @param {number} y
 * @return {"FOUND_ISLAND" | "NO_ISLAND" | "ISLAND_ALREADY_FOUND"}
 */
function markIsland(grid, islandCount, x, y) {
    if (grid[x][y] === '0')
        return 'NO_ISlAND';
    if (typeof(grid[x][y]) === 'number')
        return 'ISLAND_ALREADY_FOUND';

    grid[x][y] = islandCount + 1;

    const xSize = grid.length;
    const ySize = grid[0].length;

    // UP
    if (y > 0) {
        const nextPixel = grid[x][y-1];
        if (nextPixel === '1')
            markIsland(grid, islandCount, x, y - 1);
    }
    // DOWN
    if (y < ySize - 1) {
        const nextPixel = grid[x][y+1];
        if (nextPixel === '1')
            markIsland(grid, islandCount, x, y + 1);
    }
    // LEFT
    if (x > 0) {
        const nextPixel = grid[x-1][y];
        if (nextPixel === '1')
            markIsland(grid, islandCount, x - 1, y);
    }
    // RIGHT
    if (x < xSize - 1) {
        const nextPixel = grid[x+1][y];
        if (nextPixel === '1')
            markIsland(grid, islandCount, x + 1, y);
    }

    return 'FOUND_ISLAND';
}

class Solution {
    /**
     * @param {string[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let islandCount = 0;
        for (let x = 0; x < grid.length; x++) {
            for (let y = 0; y < grid[x].length; y++) {
                if (markIsland(grid, islandCount, x, y) === 'FOUND_ISLAND')
                    islandCount++;
            }
        }
        return islandCount;
    }
}
