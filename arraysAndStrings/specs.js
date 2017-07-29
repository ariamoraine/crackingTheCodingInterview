const chai = require('chai')
    , expect = chai.expect
    , rotateMatrix = require('./rotate_Matrix')
    , zeroMatrix = require('./zero_matrix')
    , isUnique = require('./is_unique')
    , anagrams = require('./check_permutation')
    , urlify = require('./urlify')
    , palindromePermutation = require('./palindrome_permutation')
    , oneAway = require('./one_away')

chai.use(require('chai-spies'))

describe('Chapter 1: Arrays and Strings', () => {

  describe('Is Unique', () => {
    it('is case sensitive', () => {
      expect(isUnique("Aria")).to.be.true
    })
    it('returns true for oliver', () => {
      expect(isUnique("oliver")).to.be.true
    })
    it('returns false for aria and christine', () => {
      expect(isUnique("aria")).to.be.false
      expect(isUnique("christine")).to.be.false
    })
  })

  describe('Check Permutation', () => {
    it('returns true for "dogs" and "gods"', () => {
      expect(anagrams("dogs", "gods")).to.be.true
    })
    it('returns false for "abcd" and "abcdabcd"', () => {
      expect(anagrams("abcd", "abcdabcd")).to.be.false
    })
    it('returns true for " " and " "', () => {
      expect(anagrams(" ", " ")).to.be.true
    })
    it('returns false for "a b c d" and "abcd"', () => {
      expect(anagrams("a b c d ", "abcd")).to.be.false
    })
  })

  describe('URLify', () => {
    it('returns "Mr%20John%20Smith" when given the inputs "Mr John Smith" and 13', () => {
      expect(urlify("Mr John Smith", 13)).to.equal("Mr%20John%20Smith")
    })
  })

  describe('Palindrome Permutation', () => {
    it('returns true with input "taco cat"', () => {
      expect(palindromePermutation("taco cat")).to.be.true
    })
  })

  describe('One Away', () => {
    it('returns true as intended', () => {
      expect(oneAway("pale", "ple")).to.be.true
      expect(oneAway("pales", "pale")).to.be.true
      expect(oneAway("bale", "pale")).to.be.true
    })
    it('returns false as intended', () => {
      expect(oneAway("pale", "bake")).to.be.false
    })
  })

  describe('Rotate Matrix', () => {
    let arr1, arr2
    beforeEach(() => {
      arr1 = [[1, 2, 3, 4], [0, 1, 2, 3], [0, 0, 1, 2], [1, 0, 0, 1]]
      arr2 = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]
    })

    it('input is a NxN array', () => {
      expect(arr1[0]).to.have.lengthOf(arr1.length)
      expect(arr2[1]).to.have.lengthOf(arr2.length)
    })
    it('rotates matrix as intended', () => {
      expect(rotateMatrix(arr1)).to.deep.equal([[1, 0, 0, 1], [0, 0, 1, 2], [0, 1, 2, 3], [1, 2, 3, 4]])
      expect(rotateMatrix(arr2)).to.deep.equal([['g', 'd', 'a'], ['h', 'e', 'b'], ['i', 'f', 'c']])
    })
  })

  describe('Zero Matrix', () => {
    let arr1
    beforeEach(() => {
      arr1 = [[0, 1, 2, 3, 0, 5], [1, 3, 5, 6, 2, 10], [10, 3, 2, 0, 8, 9]]
    })

    it('transforms the array as intended', () => {
      expect(zeroMatrix(arr1)).to.deep.equal([[0, 0, 0, 0, 0, 0 ], [0, 3, 5, 0, 0, 10], [0, 0, 0, 0, 0, 0]])
    })
  })

})
