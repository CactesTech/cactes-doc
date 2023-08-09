#!/bin/bash

set -e

pnpm run docs:build

cd docs/.vuepress/dist
echo "draft.cactes.com" > CNAME

git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/CactesTech/cactes-doc.git master:gh-pages
cd -
