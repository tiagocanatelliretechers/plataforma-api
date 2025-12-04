import fs from 'fs';
import path from 'path';
import YAML from 'yaml';

const yamlPath = path.join(__dirname, '../../apis-portal.yaml');
const yamlContent = fs.readFileSync(yamlPath, 'utf8');

export const openApiDocument = YAML.parse(yamlContent);

