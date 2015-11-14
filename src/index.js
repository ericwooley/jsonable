import {defaultConfig} from './default-options'
import mkdirp from 'mkdirp'
import metaPath from './lib/meta-path'
import fs from 'fs'

function debugFactory (output = false) {
  return (...args) => {
    if (output) console.log('DEBUG', ...args)
  }
}

export function getAbsolutePath (src) {
  if (src.charAt(0) === '/') return src
  return process.env.PWD + '/' + src
}

export default (options = {}) => {
  options = Object.assign(defaultConfig, options)
  const debug = debugFactory(options.debug)
  const entryPoint = getAbsolutePath(options.entry)
  const outFile = getAbsolutePath(options.out)
  debug('loading file: ', entryPoint)
  const entryJs = require(entryPoint)
  const json = entryJs.jsonExport || entryJs.default
  debug('file loaded', entryJs)
  const outFileInfo = metaPath(outFile)
  mkdirp.sync(outFileInfo.path)
  debug('writing file', outFile, json)
  const writePointer = fs.openSync(outFile, 'w')
  fs.writeSync(writePointer, JSON.stringify(json, null, options.spaces))
}
