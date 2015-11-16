/* globals describe, it */
import metaPath from '../../lib/meta-path'
import {expect} from 'chai'

describe('meta-path', () => {
  it('should give basic meta data', () => {
    const metaData = metaPath('folder1/folder2/file.json.js')
    expect(metaData).to.deep.equal({
      absoluteFolder: process.env.PWD + '/folder1/folder2/',
      absolutePath: process.env.PWD + '/folder1/folder2/file.json.js',
      type: 'js',
      fileName: 'file.json.js',
      typelessName: 'file.json',
      path: 'folder1/folder2'
    })
  })
  it('should work with no folders', () => {
    const metaData = metaPath('file.json.js')
    expect(metaData).to.deep.equal({
      absoluteFolder: process.env.PWD + '/',
      absolutePath: process.env.PWD + '/file.json.js',
      type: 'js',
      fileName: 'file.json.js',
      typelessName: 'file.json',
      path: ''
    })
  })
  it('should work with dots in the folders', () => {
    const metaData = metaPath('folder.1/folder.2/file.json.js')
    expect(metaData).to.deep.equal({
      absoluteFolder: process.env.PWD + '/folder.1/folder.2/',
      absolutePath: process.env.PWD + '/folder.1/folder.2/file.json.js',
      type: 'js',
      fileName: 'file.json.js',
      typelessName: 'file.json',
      path: 'folder.1/folder.2'
    })
  })
})
