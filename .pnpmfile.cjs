// Storybook's prop-table docgen loads TypeScript's JS API, which TS 7 no longer ships.
const docgenPackages = [
  '@storybook/react-docgen-typescript-plugin',
  'react-docgen-typescript',
];

module.exports = {
  hooks: {
    readPackage(pkg) {
      if (docgenPackages.includes(pkg.name)) {
        delete pkg.peerDependencies?.typescript;
        pkg.dependencies = { ...pkg.dependencies, typescript: '6.0.3' };
      }
      return pkg;
    },
  },
};
