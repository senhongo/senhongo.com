import fs from 'fs';
import { join } from 'path';
import * as matter from 'gray-matter';

export async function posts() {
  // get path to __content directory
  const projectDir = process.cwd();
  const contentDir = join(projectDir, '__content/blog');

  // read contents of folder
  const filenames = fs.readdirSync(contentDir, 'utf-8');

  // 1. remove drafts (starts with 00000)
  // 2a. create id by removing numbers and .md extension
  // 2b. get metadata
  return filenames
    .filter((f) => f !== '.DS_Store')
    .filter((f) => !f.startsWith('00000-'))
    .sort(
      (a, b) =>
        parseInt(b.substring(5, 0), 10) - parseInt(a.substring(5, 0), 10),
    )
    .map((f) => ({
      id: f.substring(6).replace(/\.md$/, ''),
      contents: matter.read(`${contentDir}/${f}`),
    }));
}
