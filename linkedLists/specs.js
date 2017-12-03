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

  describe('Intersection', () => {
    const linkedList1 = new LinkedList()
    const linkedList2 = new LinkedList()
    const linkedList3 = new LinkedList()
    const node1 = new Node('1')
    const node2 = new Node('2')
    const node3 = new Node('3')
    const node4 = new Node('4')
    const node5 = new Node('5')

    linkedList1.insert('a')
    linkedList1.insert('b')
    linkedList1.insert('c')
    linkedList1.insert(node2)
    linkedList1.insert('d')

    linkedList2.insert(node1)
    linkedList2.insert('e')
    linkedList2.insert(node2)
    linkedList2.insert('f')
    linkedList2.insert(node5)

    linkedList3.insert(1)
    linkedList3.insert(2)
    linkedList3.insert(3)
    linkedList3.insert(4)
    linkedList3.insert(5)

    it("returns the intesecting node", () => {
        expect(intersection(linkedList1, linkedList2)).to.be.a('object')
    })
    it("returns the correct node", () => {
        expect(intersection(linkedList1, linkedList2)).to.have.deep.property('value', '2')
    })
    it("returns false if there is no intersection", () => {
        expect(intersection(linkedList1, linkedList3)).to.be.false
    })
  })

  describe('Kth to the last', () => {

  })

  describe('Remove Duplicates', () => {

  })

  describe('Sum lists', () => {

  })
})
