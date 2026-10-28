import {build} from 'esbuild-wasm';
import path from 'node:path';
await build({absWorkingDir:process.cwd(),entryPoints:[path.resolve('src.jsx')],tsconfigRaw:{compilerOptions:{jsx:'react'}},bundle:true,minify:true,outfile:'dist/app.js',loader:{'.jsx':'jsx'}});

