/**
 * Any schema with zod's `safeParse`, so callers can pass a schema from
 * whichever zod major they use.
 */
export type SafeParseSchema<Value> = {
  safeParse: (
    data: unknown,
  ) => { data: Value; success: true } | { success: false };
};
