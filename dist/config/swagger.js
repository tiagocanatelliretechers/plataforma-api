"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.openApiDocument = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const yaml_1 = __importDefault(require("yaml"));
// Busca o YAML na raiz do projeto (funciona em dev e prod)
const possiblePaths = [
    path_1.default.join(__dirname, '../../apis-portal.yaml'), // dev: src/config -> root
    path_1.default.join(__dirname, '../apis-portal.yaml'), // prod: dist/config -> dist/
    path_1.default.join(process.cwd(), 'apis-portal.yaml'), // fallback: working directory
];
let yamlPath = '';
for (const p of possiblePaths) {
    if (fs_1.default.existsSync(p)) {
        yamlPath = p;
        break;
    }
}
if (!yamlPath) {
    throw new Error('Arquivo apis-portal.yaml não encontrado! Caminhos verificados: ' + possiblePaths.join(', '));
}
const yamlContent = fs_1.default.readFileSync(yamlPath, 'utf8');
exports.openApiDocument = yaml_1.default.parse(yamlContent);
//# sourceMappingURL=swagger.js.map