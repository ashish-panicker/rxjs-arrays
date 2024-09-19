import { from, of } from 'rxjs'
import { catchError, filter, map, reduce, take } from 'rxjs/operators'

const numbers: number[] = [1, 2, 3, 4, 5]

// Create an observable from an array
let numberObservable = from(numbers)

/**
 * The pipe method in RxJS is used to chain multiple operators together in a readable
 * and functional way.
 * It helps transform or manipulate the data emitted by observables.
 * In TypeScript, the pipe method is essential for composing multiple operators into a
 * single stream of operations.
 *
 * The pipe method allows you to pass an observable through a series of operators, transforming its data
 * along the way. Instead of applying operators separately to the observable, you can combine them
 * using pipe, creating a sequence of transformations that is executed in order.
 *
 * observable.pipe(operator1(),operator2(),operator3())
 *
 * Common Pipe Operators:
 * map: Transforms the values emitted by the observable.
 * filter: Filters values based on a condition.
 * mergeMap: Flattens and merges nested observables.
 * reduce: Accumulates the emitted values into a single result.
 * take: Limits the number of emissions from an observabl
 *
 */
// Use pipe to combine operators
const processedObservable = numberObservable.pipe(
  // Double each number
  map((num) => num * 2),

  // Filter to allow only numbers greater than 5
  filter((num) => num > 5),

  // Sum all the remaining numbers
  reduce((acc, num) => acc + num, 0)
)

console.log('Combining operators:')
// Subscribe and output the final result
processedObservable.subscribe({
  next: (result) => console.log(`Final result: ${result}`),
  complete: () => console.log('Processing completed'),
}) // Output: Final result: 24, Processing completed

// Example: Chaining map, filter, and take operators

numberObservable = from(numbers).pipe(
  // Double each number
  map((num) => num * 2),

  // Only allow even numbers (already doubled, so all will be even)
  filter((num) => num % 2 === 0),

  // Take only the first 2 results
  take(2)
)
console.log('Chaining operators:')
numberObservable.subscribe({
  next: (number) => console.log(`Processed number: ${number}`),
  complete: () => console.log('Processing completed'),
}) // Output: Processed number: 2, Processed number: 4, Processing completed

// You can also handle errors inside the pipe method using operators like catchError or retry.
// This allows you to gracefully handle errors within the observable chain.

numberObservable = from(numbers).pipe(
  // Map the values, but throw an error if the number is 3
  map((num) => {
    if (num === 3) {
      throw new Error('Number 3 is not allowed')
    }
    return num
  }),

  // Catch and handle the error
  catchError((error) => {
    console.error(error.message)
    return of(-1) // Return an observable with a fallback value
  })
)
console.log('Handling errors:')
numberObservable.subscribe({
  next: (number) => console.log(`Processed number: ${number}`),
  complete: () => console.log('Processing completed'),
})

/**
 * Benefits of Using pipe
 * Readability: pipe makes it easy to read and follow the flow of transformations.
 * Modularity: Each operator in the pipe can be independently modified or removed without affecting the others.
 * Composition: Operators can be composed together to create complex data pipelines with minimal effort.
 * Error Handling: You can seamlessly integrate error handling and recovery logic within the same pipe chain.
 */
