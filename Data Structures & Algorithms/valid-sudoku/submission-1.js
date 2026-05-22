class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = Array.from({ length: 9 }, () => new Set());
        let cols = Array.from({ length: 9 }, () => new Set());
        let boxes = Array.from({ length: 9 }, () => new Set());

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] === ".") continue;

                let digit = board[r][c];
                let boxId = Math.floor(r / 3) * 3 + Math.floor(c / 3);

                if (rows[r].has(digit) || cols[c].has(digit) || boxes[boxId].has(digit)) {
                    return false;
                }

                rows[r].add(digit);
                cols[c].add(digit);
                boxes[boxId].add(digit);
            }
        }

        return true;
    }
}
