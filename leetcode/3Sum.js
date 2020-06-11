/*
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
    // sort the array
    nums = nums.sort((a,b) => a - b);
    // init return array
    let results = [];
    
    // for loop for fixed value i
    for (let i = 0; i < nums.length - 2; i++){
        if (i !== 0 && nums[i] === nums[i - 1]) continue;
        let low = i + 1;
        let up = nums.length - 1;
        
        while (low < up) {
            let target = nums[i] + nums[low] + nums[up];
            if (target === 0){
                results.push([nums[i], nums[low], nums[up]]);
                while (nums[low] === nums[low + 1]) low++;
                while (nums[up] === nums[up - 1]) up--;
                low++;
                up--;
            } else if (target > 0) {
                up--;
            } else {
                low++
            }
        }
    }
    return results;
};