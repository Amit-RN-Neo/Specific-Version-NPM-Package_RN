import SpecificVersionRnLibrary from './NativeSpecificVersionRnLibrary';

export function multiply(a: number, b: number): number {
  return SpecificVersionRnLibrary.multiply(a, b);
}

export function addition(a: number, b: number): number {
  return SpecificVersionRnLibrary.addition(a, b);
}
