const cp = require('child_process')

const args = process.argv.slice(process.argv.indexOf('prettier') + 1)
const prettier = require.resolve('prettier/bin-prettier')

cp.execSync(
  `${prettier} ${args.length > 0 ? args.join(' ') : '--write'} 'src/**/*.{js,jsx,ts,tsx}'`,
  { stdio: 'inherit' }
)
