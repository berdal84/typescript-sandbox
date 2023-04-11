/**
 * Implementation of the famous merge sort algorithm
 * reminder: complexity is O(n log(n))
 * @see https://en.wikipedia.org/wiki/Merge_sort
 * @param arr
 */
export function merge_sort<T>(arr: T[]): T[] {
    switch (arr.length) {
        case 0:
        case 1:
            return arr;
        default:
            return arr;
    }
}