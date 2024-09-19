/**
 * The of method in RxJS is a creation operator that emits the arguments you provide
 * and then completes. It is commonly used to create observables from values,
 * such as strings, arrays, numbers, or objects.
 *
 * Key Points About of:
 * It creates an observable that emits values passed as arguments one by one.
 * After emitting all the values, it completes.
 * It can emit any number of values (e.g., scalar values, arrays, objects).
 */

// Example 1: Emitting Scalar Values
import { of } from 'rxjs'

// Emit numbers 1, 2, 3
const numbers$ = of(1, 2, 3)

numbers$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed'),
}) // Output: 1, 2, 3, Completed

// Emit Array as a Single Value
const array$ = of([1, 2, 3])

array$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed'),
}) // Output: [1, 2, 3], Completed

// Emit an object as a single value
const object$ = of({ name: 'Ashish', age: 30 })

object$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed'),
}) // Output: { name: 'Ashish', age: 30 }, Completed

const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' },
]

const observable$ = of(users)

observable$.subscribe({
  next: (value) => console.log('Users:', value),
  complete: () => console.log('Completed'),
}) 
// Output: Users: [ { id: 1, name: 'John' }, { id: 2, name: 'Jane' }, 
// { id: 3, name: 'Bob' } ], Completed