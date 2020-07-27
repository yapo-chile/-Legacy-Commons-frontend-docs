#!/bin/sh

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

commit_page () {
  git push origin --delete gh-pages
  git checkout -b gh-pages
  yarn run build
  git add .
  git commit -m "doc(page): bump version"
  git subtree push --prefix .vuepress origin gh-pages
}

setup_git
commit_page