"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const path = require("path")
var path_1 = __importDefault(require("path"));
function getNodeModulesDir() {
    var dir = path_1.default.resolve(__dirname, "..");
    return dir;
}
exports.getNodeModulesDir = getNodeModulesDir;