#! /usr/bin/env node
import minimus from 'minimist'
import {helpText} from './default-options'
import jsonjs from './index'
const argv = minimus(process.argv.slice(2))
if (argv.help) {
  process.stdout.write(helpText)
  process.exit(0)
} else {
  jsonjs(argv)
}
