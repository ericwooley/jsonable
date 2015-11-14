function deriveLeadingLast (path, dilemeter) {
  const piratePath = path.split(dilemeter)
  const last = piratePath.pop()
  const leading = piratePath.join(dilemeter)
  return {last, leading}
}

export default function metaPath (fullPath) {
  const pathInfo = deriveLeadingLast(fullPath, '/')
  const path = pathInfo.leading
  const fileName = pathInfo.last
  const fileInfo = deriveLeadingLast(fileName, '.')
  const typelessName = fileInfo.leading
  const type = fileInfo.last
  return { type, fileName, typelessName, path }
}
