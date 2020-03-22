module.exports = class DepthCalculator {


    calculateDepth( arr , depth = 1) {
        let currentDepth = depth;
        for (let i = 0; i < arr.length; i++) {
            
            if (Array.isArray(arr[i])) {
                depth = Math.max(depth,this.calculateDepth(arr[i], currentDepth + 1));
            }
        }
        return depth;
    }
};