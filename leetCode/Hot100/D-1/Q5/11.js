var maxAreaBrute = function(height) {
  let maxWater = 0;

  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const width = j - i;
      const h = Math.min(height[i], height[j]);
      const area = width * h;

      maxWater = Math.max(maxWater, area);
    }
  }

  return maxWater;
};
// 
var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    const width = right - left;
    const h = Math.min(height[left], height[right]);
    const area = width * h;

    maxWater = Math.max(maxWater, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
};