/* global describe, it */
import {expect} from 'chai'
import jsonjs from '../index'
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
      // debug: true
    })
    const output = fs.readFileSync(out).toString()
    expect(output).to.equal(JSON.stringify(basicPojo))
  })
})
