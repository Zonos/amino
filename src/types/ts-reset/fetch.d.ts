// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
interface Body {
  json<T = unknown>(): Promise<T>;
}
