/**
 * In RxJS, the from operator is used to convert various types of input, 
 * such as arrays, promises, iterables, and other objects, into an observable stream. 
 * Once converted, RxJS allows you to apply various operators to process the emitted values.
 */

import { from } from 'rxjs'

const array = [1, 2, 3, 4, 5]
const observable = from(array) // Convert array to observable

observable.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed'),
}) // Output: 1, 2, 3, 4, 5, Completed


const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Resolved Promise!'), 2000)
}) // Create a promise

const observablePromise = from(promise) // Convert promise to observable

observablePromise.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed'),
}) // Output: Resolved Promise!, Completed

// Using from with an iterable (like a string)
const iterable = 'Hello RxJS'
const observableString = from(iterable)

observableString.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed'),
}) // Output: H, e, l, l, o, , R, x, J, S, Completed

// using with Map
const map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
])
const observableMap = from(map)

observableMap.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed'),
}) // Output: [1, 'one'], [2, 'two'], [3, 'three'], Completed

