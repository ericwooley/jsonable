export const defaultConfig = {
  entry: 'index.json.js',
  out: 'stdout',
  debug: false,
  spaces: 0
}
function createSpaces (leftText, rightText, leftSize = 40) {
  const spacesNeeded = leftSize - leftText.length
  let spaces = ''
  for (let i = 0; i < spacesNeeded; i++) spaces += ' '
  return leftText + spaces + rightText
}
export var helpText = `
  Usage: jsonjs [options]
  -----------------------
  ${createSpaces('--help', 'show help text')}
  ${createSpaces('--entry=(' + defaultConfig.entry + ')', 'Source file')}
  ${createSpaces('--out=(' + defaultConfig.out + ')', 'Output destination')}
  ${createSpaces('--debug=(' + defaultConfig.debug + ')', 'Output debugging information')}
  ${createSpaces('--spaces=(' + defaultConfig.spaces + ')', 'make JSON indented with this many spaces')}
`
