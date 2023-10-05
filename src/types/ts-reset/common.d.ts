// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
interface ObjectConstructor {
  keys<T extends Record<string, unknown>>(o: T): (keyof T)[];
}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
interface JSON {
  parse<T = unknown>(text: string): T;
}
