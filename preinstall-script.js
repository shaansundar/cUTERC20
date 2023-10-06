/**
 * Do NOT allow using `npm` or `yarn` as package manager.
 */
if (process.env.npm_execpath.indexOf('Bun') === -1) {
    console.error('You must use Bun to install dependencies:');
    console.error('  $ bun install');
    process.exit(1);
  }