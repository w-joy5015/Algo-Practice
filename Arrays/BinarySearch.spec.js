const {expect} = require('chai')
const { binarySearch } = require('./BinarySearch')

describe("Binary search", () => {
  const sortedArr1 = [-5, 4, 8, 12, 22, 50, 101]
  const sortedArr2 = [0]
  const sortedArr3 = [-2, 2]

  it("returns the index of a target if it exists", () =>{
    expect(binarySearch(sortedArr1, 101)).to.equal(6)
    expect(binarySearch(sortedArr2, 0)).to.equal(0)
    expect(binarySearch(sortedArr3, -2)).to.equal(0)
  })
  it("returns -1 if the target does not exist", () => {
    expect(binarySearch(sortedArr1, 11)).to.equal(-1)
    expect(binarySearch(sortedArr2, 5)).to.equal(-1)
    expect(binarySearch(sortedArr3, 3)).to.equal(-1)
  })
})
