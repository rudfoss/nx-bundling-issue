# NxBundlingIssue

A "clean" project to test bundling and tree shaking for react-icons.

Reproduce:

1. npx create-nx-workspace --preset=ts nx-bundling-issue
2. npm install -D @nrwl/react
3. nx migrate next
4. npx nx migrate --run-migrations
5. (add scripts to package.json)
6. npm run build
7. npm run analyze