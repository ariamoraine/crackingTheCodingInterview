/*

A binary search tree was created by traversing through an array from left to right and inserting each element. Given a binary search tree with distinct elements, print all possible arrays that could have led to this tree.

Input:

      2
     / \
    1   3

Output: [ 2, 1, 3 ], [ 2, 3, 1 ]

        10
       /  \
      3    17
     / \     \
    1   4     19


 [ [10, 3, 17, 1, 4, 19], [10, 17, 3, 4, 1, 19],
 [10, 3, 17, 1, 19, 4], [10, 17, 3, 4, 19, 1],
 [10, 3, 17, 4, 1, 19], [10, 17, 3, 1, 4, 19],
 [10, 3, 17, 4, 19, 1], [10, 17, 3, 1, 19, 4],
 [10, 3, 17, 19, 1, 4], [10, 17, 3, 19, 1, 4],
 [10, 3, 17, 19, 4, 1], [10, 17, 3, 19, 4, 1] ]


                    ~~~~~~~~~~ HINT ~~~~~~~~~~
break this down into subprobelms. use recursion. if you had all possible sequences for te left subtree and the right subtree, how could you create all possible sequences for the entire tree?


*/



