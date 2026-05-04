class Solution:
    def markIsland(self, grid, x, y):
        if grid[x][y] == '0':
            return 'NO_ISLAND'
        if grid[x][y] != '1':
            return 'ALREADY_FOUND_ISLAND'
        xSize = len(grid)
        ySize = len(grid[0])

        grid[x][y] = True
        
        # UP
        if y > 0 and grid[x][y-1] == '1':
            self.markIsland(grid, x, y-1)
        # DOWN
        if y < ySize - 1 and grid[x][y+1] == '1':
            self.markIsland(grid, x, y+1)
        # LEFT
        if x > 0 and grid[x-1][y] == '1':
            self.markIsland(grid, x-1, y)
        # RIGHT
        if x < xSize - 1 and grid[x+1][y] == '1':
            self.markIsland(grid, x+1, y)
        return 'FOUND_ISLAND'

    def numIslands(self, grid: List[List[str]]) -> int:
        islandCount = 0
        for x in range(len(grid)):
            for y in range(len(grid[x])):
                if (self.markIsland(grid, x, y) == 'FOUND_ISLAND'):
                    islandCount += 1

        return islandCount