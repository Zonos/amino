interface ObjectConstructor {
  keys<T extends Record<string, unknown>>(o: T): (keyof T)[];
}

interface JSON {
  parse<T = unknown>(text: string): T;
}
