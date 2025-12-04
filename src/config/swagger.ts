import fs from 'fs';
import path from 'path';
import YAML from 'yaml';

// Busca o YAML na raiz do projeto (funciona em dev e prod)
const possiblePaths = [
  path.join(__dirname, '../../apis-portal.yaml'),      // dev: src/config -> root
  path.join(__dirname, '../apis-portal.yaml'),         // prod: dist/config -> dist/
  path.join(process.cwd(), 'apis-portal.yaml'),        // fallback: working directory
];

let yamlPath = '';
for (const p of possiblePaths) {
  if (fs.existsSync(p)) {
    yamlPath = p;
    break;
  }
}

if (!yamlPath) {
  throw new Error('Arquivo apis-portal.yaml não encontrado! Caminhos verificados: ' + possiblePaths.join(', '));
}

const yamlContent = fs.readFileSync(yamlPath, 'utf8');
export const openApiDocument = YAML.parse(yamlContent);

