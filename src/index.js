import {defaultConfig} from './default-options'
import mkdirp from 'mkdirp'
import metaPath from './lib/meta-path'
import fs from 'fs'

function debugFactory (output = false) {
  return (...args) => {
    if (output) console.log('DEBUG', ...args)
  }
}

export default (options = {}) => {
  options = Object.assign(defaultConfig, options)
  const debug = debugFactory(options.debug)
  const entryMeta = metaPath(options.entry)
  debug('entry meta', entryMeta)
  const entryPoint = entryMeta.absolutePath
  const outFileMeta = metaPath(options.out)
  debug('out meta', outFileMeta)
  const outFile = outFileMeta.absolutePath
  debug('loading file: ', entryPoint)
  const entryJs = require(entryMeta.absolutePath)
  const json = entryJs.jsonExport || entryJs.default
  debug('file loaded', entryJs)
  mkdirp.sync(outFileMeta.absoluteFolder)
  debug('writing file', outFile, json)
  const writePointer = fs.openSync(outFile, 'w')
  fs.writeSync(writePointer, JSON.stringify(json, null, options.spaces))
}
