var trapBrute = function (height) {
    let water = 0;

    for (let i = 0; i < height.length; i++) {
        let leftMax = 0;
        let rightMax = 0;

        for (let left = 0; left <= i; left++) {
            leftMax = Math.max(leftMax, height[left]);
        }

        for (let right = i; right < height.length; right++) {
            rightMax = Math.max(rightMax, height[right]);
        }

        water += Math.min(leftMax, rightMax) - height[i];
    }

    return water;
};
// 较优解
var trapTwoPointers = function(height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        water += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        water += rightMax - height[right];
      }
      right--;
    }
  }

  return water;
};
