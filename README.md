# javascript-algorithms

This repo is dedicated to enhance my skills by implementing different algorithms using javascript.
Note that these implementations are written by me, it might have some bugs, some vulnerabilities, might not following the best practice, but here we are.

## Binary Search

Implemented using a helper function to provide a level of abstraction so that a user can only pass a sorted array, and an element to search for.

### Time Complexity:

O(log(n))

## Naive String Search

Find how many sub-string are contained in a main string.

### Time Complexity:

O(n \* m)

n: length of main string
m: length of the substring

## Bubble Sort

Optimized bubble sort algorithm for sorting arrays and nearly-sorted arrays

### Time Complexity:

In general: O(n^2)
if data is nearly sorted, or sorted: O(n)

n: size of the array

## Selection Sort

Selection Sort potentially is better than something like bubble sort in a scenario which is for some reason you're in a situation where you want to minimize the number of swaps that you're making.

### Time Complexity:

In general: O(n^2)

n: size of the array
