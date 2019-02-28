# Notes on RunTime and Space Complexity for future reference
> Take straight from books like CTCI

## General Definition
Big O is the language and metric we use to describe the efficiency of algorithms.

## Time Complexity

- Big O - upper bound on time or worst case scenario. e.g. O(N^2), O(N^3)
- Big Omega - lower bound on time or best case scenario. e.g. O(1), O(n) in some cases.
- Big Theta - inclusive of both Big O and Big Omega, mix of best and worst case scenarios. e.g. best case: O(n), worst case: (N^2)

## Space Complexity

- Amount of memory required for an algorithms is an important consideration.
- An array has a space complexity of O(n) while a two-dimensional array O(n^2).
- Recursive calls also take up O(n) space.

## Big O times

- O(n!) - factorial time
- O(2^n) - exponential time
- O(n^2) - quadratic time
- O(n log n) - quasilinear time
- O(n) - linear time
- O(log n) - logarithmic time
- O(1) - constant time

## Figuring out Run Time of an Algorithms

- Constants are normally dropped, while dominant terms are kept. e.g. O(n^2 + n) = O(n^2)
- Amortized Time of resizing an array over time can be considered O(1) insertion time when considering the sum of those operations.
  ```
  X + ½ + ¼ + ½ + ... + 1 = O(2x) for x insertions
  O(1) for each insertion
  ```
- Terms that are not the same cannot be dropped. e.g. O(b^2 + a).
- O(a + b)
  ```
    for(let i = 0; i < length; i++){
      console.log(i);
    }
    for(let i = 0; i < length; i++){
        console.log(i);
    }
  ```
- O(A*B)
  ```
  for(let i = 0; i < length; i++){
    for(let j = 0; j < length; j++){
      console.log(i, j);
    }
  }
  ```
- O(log n) - e.g. binary search where search is cut in half each time.
>Pseudo code example

  ```
  search 9 within {1, 5, 8, 9, 11, 13, 15, 19, 21}
    compare 9 to 11 -> smaller.
    search 9 within {1, 5, 8, 9, 11}
      compare 9 to 8 -> bigger
      search 9 within {9, 11}
        compare 9 to 9
        return
  ```
