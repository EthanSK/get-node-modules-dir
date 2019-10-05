"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
function getNodeModulesDir(isUnpackedAsarDir) {
    if (isUnpackedAsarDir === void 0) { isUnpackedAsarDir = false; }
    var dir = path_1.default.resolve(__dirname, "..");
    if (isUnpackedAsarDir)
        dir = dir.replace("app.asar", "app.asar.unpacked");
    return dir;
}
exports.getNodeModulesDir = getNodeModulesDir;
