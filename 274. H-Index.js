/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a, b) => a - b);// 0,1,3,5,6
      let hIndex = 0;
      for (let i = 0; i < citations.length; i++) {
          const h = Math.min(citations[i], citations.length - i);
          hIndex = Math.max(hIndex, h);
      }
      return hIndex;
  
  };