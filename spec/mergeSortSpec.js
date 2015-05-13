var mergeSort = require("../mergeSort.js");

describe('Merge', function() {
  it('should merge two arrays of size 1', function() {
     expect(mergeSort.merge([1],[2])).toEqual([1,2]);
  });

  it('should merge two arrays of size 2', function(){
  	expect(mergeSort.merge([2, 3], [1, 5])).toEqual([1, 2, 3, 5]);
  });

  it('should merge two arrays of size 3 and 4', function(){
  	expect(mergeSort.merge([2, 3, 6], [1, 4, 5, 9])).toEqual([1, 2, 3, 4, 5, 6, 9]);
  });

  it('should merge when left array is larger than right', function(){
  	expect(mergeSort.merge([1, 4, 5, 9], [2, 3, 6])).toEqual([1, 2, 3, 4, 5, 6, 9]);
  });

  it('should merge when left array is all smaller than right', function() {
  	expect(mergeSort.merge([1, 2, 3, 4], [5, 6, 9])).toEqual([1, 2, 3, 4, 5, 6, 9]);
  });

});

describe('Merge Sort', function() {
  it('should sort an array of length 2', function() {
     expect(mergeSort.mergeSort([2,1])).toEqual([1,2]);
  });

  it('should sort an array of length 4', function(){
  	expect(mergeSort.mergeSort([2, 4, 1, 3])).toEqual([1, 2, 3, 4]);
  });

  it('should sort an array of length 7', function() {
  	expect(mergeSort.mergeSort([2, 4, 5, 7, 3, 1, 8])).toEqual([1, 2, 3, 4, 5, 7, 8]);
  });
});

