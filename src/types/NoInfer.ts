/**
 * @desc A way to disable type inference
 * https:stackoverflow.com/questions/56687668/a-way-to-disable-type-argument-inference-in-generics
 */
export type NoInfer<T> = [T][T extends unknown ? 0 : never];
