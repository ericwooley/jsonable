/* global describe, it */
import {expect} from 'chai'
import jsonjs from '../src/index'
import basicPojo from './files/basic-pojo.json'
import fs from 'fs'

describe('Basic Functionality', () => {
  it('should exist', () => {
    expect(jsonjs).to.exist
  })
  it('should convert a basic POJO and write it to disk', () => {
    const out = 'dist/tests/out-files/basic-pojo.json'
    const entry = 'dist/tests/files/basic-pojo.json.js'
    jsonjs({
      entry,
      out
    })
    const output = fs.readFileSync(out).toString()
    expect(output).to.equal(JSON.stringify(basicPojo))
  })
  it('should handle internal requires properly', () => {
    const out = 'dist/tests/out-files/require-test.json'
    const entry = 'dist/tests/files/json-include.json.js'

    jsonjs({
      entry,
      out
    })
    const output = fs.readFileSync(out).toString()
    expect(output).to.equal(JSON.stringify({
      basicJson: {
        test: 'test',
        number: 1
      }
    }))
  })
})
