const chai = require('chai')
    , expect = chai.expect
    , deleteMiddle = require('./delete_middle_node')
    , intersection = require('./intersection')
    , kthToLast = require('./kth_to_last')
    , removeDups = require('./remove_duplicates')
    , sum_list = require('./sum_Lists')
    , {LinkedList, Node} = require('../utils/linked_list')

chai.use(require('chai-spies'))

describe('Chapter 2: Linked Lists', () => {

  describe('Delete Middle Node', () => {
    const linkedList = new LinkedList()
    linkedList.insert('a')
    linkedList.insert('b')
    linkedList.insert('c')
    linkedList.insert('d')
    linkedList.insert('e')
    it("returns undefined", () => {
      expect(deleteMiddle(linkedList, 'c')).to.be.undefined
    })
    it("linked list should be modified to not include target", () => {
      expect(linkedList).to.deep.equal({head: {value: 'a', next: {value: 'b', next: {value: 'd', next: {value: 'e', next: null }}}}})
    })
  })
})
