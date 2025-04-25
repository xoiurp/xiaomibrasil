
      var require = await (async () => {
        var { createRequire } = await import("node:module");
        return createRequire(import.meta.url);
      })();
    
import "./chunk-OEQOKJGE.js";

// package.json
var name = "@netlify/plugin-nextjs";
var version = "5.10.7";
var description = "Run Next.js seamlessly on Netlify";
var main = "./dist/index.js";
var type = "module";
var files = [
  "dist",
  "edge-runtime",
  "manifest.yml"
];
var engines = {
  node: ">=18.0.0"
};
var scripts = {
  prepack: "clean-package",
  postpack: "clean-package restore",
  pretest: "npm run pretest:integration",
  "pretest:integration": "npm run build && node tests/prepare.mjs",
  build: "node ./tools/build.js",
  "build:watch": "node ./tools/build.js --watch",
  lint: "eslint --cache --format=codeframe --max-warnings=0 --ext .ts,.cts,.js src",
  "format:fix": "prettier --write .",
  "format:check": "prettier --check .",
  test: "vitest",
  "test:unit": "vitest run --project unit",
  "test:integration": "vitest run --project integration",
  "test:smoke": "vitest run --project smoke",
  "test:e2e": "playwright test",
  "test:ci:unit-and-integration": "vitest run --reporter=default --retry=3 --project=unit --project=integration",
  "test:ci:smoke": "vitest run --reporter=default --retry=3 --project=smoke",
  "test:ci:e2e": "playwright test",
  typecheck: "tsc --noEmit"
};
var repository = {
  type: "git",
  url: "git+https://github.com/opennextjs/opennextjs-netlify.git"
};
var keywords = [
  "nextjs",
  "netlify",
  "next",
  "netlify-runtime"
];
var license = "MIT";
var bugs = {
  url: "https://github.com/opennextjs/opennextjs-netlify/issues"
};
var homepage = "https://opennext.js.org/netlify";
var devDependencies = {
  "@fastly/http-compute-js": "1.1.5",
  "@netlify/blobs": "^8.2.0",
  "@netlify/build": "^32.0.0",
  "@netlify/edge-bundler": "^13.0.2",
  "@netlify/edge-functions": "^2.11.1",
  "@netlify/eslint-config-node": "^7.0.1",
  "@netlify/functions": "^3.0.4",
  "@netlify/serverless-functions-api": "^1.37.0",
  "@netlify/zip-it-and-ship-it": "^10.0.6",
  "@opentelemetry/api": "^1.8.0",
  "@opentelemetry/exporter-trace-otlp-http": "^0.51.0",
  "@opentelemetry/resources": "^1.24.0",
  "@opentelemetry/sdk-node": "^0.51.0",
  "@opentelemetry/sdk-trace-node": "^1.24.0",
  "@opentelemetry/semantic-conventions": "^1.24.0",
  "@playwright/test": "^1.43.1",
  "@types/node": "^20.12.7",
  "@types/picomatch": "^3.0.0",
  "@types/uuid": "^10.0.0",
  "@vercel/nft": "^0.27.0",
  cheerio: "^1.0.0-rc.12",
  "clean-package": "^2.2.0",
  esbuild: "^0.25.0",
  execa: "^8.0.1",
  "fast-glob": "^3.3.2",
  "fs-monkey": "^1.0.6",
  "get-port": "^7.1.0",
  "lambda-local": "^2.2.0",
  "lru-cache": "^10.4.3",
  memfs: "^4.9.2",
  "mock-require": "^3.0.3",
  msw: "^2.0.7",
  "netlify-cli": "^20.0.2",
  next: "^15.0.0-canary.28",
  os: "^0.1.2",
  outdent: "^0.8.0",
  "p-limit": "^5.0.0",
  "path-to-regexp": "^6.2.1",
  picomatch: "^4.0.2",
  prettier: "^3.2.5",
  semver: "^7.6.0",
  typescript: "^5.4.5",
  unionfs: "^4.5.4",
  uuid: "^10.0.0",
  vitest: "^3.0.0"
};
var clean_package = {
  indent: 2,
  remove: [
    "clean-package",
    "dependencies",
    "devDependencies",
    "scripts"
  ]
};
var package_default = {
  name,
  version,
  description,
  main,
  type,
  files,
  engines,
  scripts,
  repository,
  keywords,
  license,
  bugs,
  homepage,
  devDependencies,
  "clean-package": clean_package
};
export {
  bugs,
  clean_package as "clean-package",
  package_default as default,
  description,
  devDependencies,
  engines,
  files,
  homepage,
  keywords,
  license,
  main,
  name,
  repository,
  scripts,
  type,
  version
};
