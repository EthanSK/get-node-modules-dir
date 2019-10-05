import path from "path"

export function getNodeModulesDir(isUnpackedAsarDir: boolean = false) {
  let dir = path.resolve(__dirname, "..")
  if (isUnpackedAsarDir) dir = dir.replace("app.asar", "app.asar.unpacked")
  return dir
}
