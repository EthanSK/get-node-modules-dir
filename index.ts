import path from "path"

export function getNodeModulesDir() {
  const dir = path.resolve(__dirname, "..")
  return dir
}
