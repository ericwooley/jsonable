function deriveLeadingLast (path, dilemeter) {
  const piratePath = path.split(dilemeter)
  const last = piratePath.pop()
  const leading = piratePath.join(dilemeter)
  return {last, leading}
}

export function getAbsolutePath (src) {
  if (src.charAt(0) === '/') return src
  return process.env.PWD + '/' + src
}

export default function metaPath (fullPath) {
  const pathInfo = deriveLeadingLast(fullPath, '/')
  const path = pathInfo.leading
  const fileName = pathInfo.last
  const fileInfo = deriveLeadingLast(fileName, '.')
  const typelessName = fileInfo.leading
  const type = fileInfo.last
  // const cleanPath = ((path ? (path + '/') : '') + fileName).replace(process.env.PWD, '')
  const absolutePath = getAbsolutePath(fullPath)
  const absoluteFolder = absolutePath.replace(fileName, '')
  return { type, fileName, typelessName, path, absolutePath, absoluteFolder }
}
