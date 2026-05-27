var moveZeroesBrute = function(nums) {
  let slow = 0;

  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      nums[slow] = nums[fast];
      slow++;
    }
  }

  for (let i = slow; i < nums.length; i++) {
    nums[i] = 0;
  }
};