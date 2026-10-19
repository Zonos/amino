export default {
  meta: { name: 'no-for-in' },
  rules: {
    'no-for-in': {
      create: context => ({
        ForInStatement: node =>
          context.report({
            message: 'Use Object.keys/entries or for...of instead of for...in.',
            node,
          }),
      }),
    },
  },
};
