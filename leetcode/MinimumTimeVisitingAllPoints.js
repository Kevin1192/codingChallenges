// 1266. Minimum Time Visiting All Points

// On a plane there are n points with integer coordinates points[i] = [xi, yi]. Your task is to find the minimum time in seconds to visit all points.

// You can move according to the next rules:

// In one second always you can either move vertically, horizontally by one unit or diagonally (it means to move one unit vertically and one unit horizontally in one second).
// You have to visit the points in the same order as they appear in the array.


/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let count = 0;
    for (let i = 1; i < points.length; i++) {
        let latterPoint = points[i];
        let frontPoint = points[i - 1];
        
        let maxMove = Math.max(Math.abs(latterPoint[0] - frontPoint[0]), Math.abs(latterPoint[1] - frontPoint[1]));
        count += maxMove;
    }

    return count;
};