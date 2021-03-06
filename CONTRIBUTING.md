# 👋 Hello

Thank you for your interest in contributing to our project.
We put together a few infos that should make your life easier!

## Issue or Pull Request

Generally we prefer [PRs][] over issues, as it is usually easier to
understand what you are talking about. In order to get started working
on the code please read below 👇.

## Get started

1. Get the stable node version for your OS.
2. Get the latest version of `npm` (don't use yarn) to run all scripts by running `npm i npm@latest -g`.
3. Install all dependencies using `npm i`.
4. List all the available scripts using `npm run`.
5. Run the tests using `npm run test`.

## Development environment

We use [Visual Studio Code][] with following plugins:

- [ESLint][] to lint JavaScript files generated by our scripts
- [vscode-proto3][] to get a basic file-format support for protocol buffers
- [TSLint][] to lint TypeScript source files
- [npm Intellisense][] to lookup npm entries in import statements
- [auto-schema][] to get code-completion in the json files
- [EditorConfig][] to define and maintain consistent coding styles between different editors and IDEs

## Before Pull Requests

Please make sure that you run `npm run test` before any pull request.
It would also be nice if a pull request only contains few changes and
understandable commit messages.

We encourage `[WIP]` (Work in Progress) Pull requests: If you start
working on something important: please create a pull request as soon
as you have something visible, even though you don't feel comfortable
with merging it yet. While the PR has `[WIP]` we have no problem (and like)
you to use `git push --force` for rebases. Once you feel comfortable
with the code being merged: remove `[WIP]` and add a comment to the
PR. Please don't force-push then.

## Writing tests

We love writing tests. A lot in this repository is about dealing with
reproducable behavior on many systems. If you find a bug or problem
it would be awesome if you could also provide a failing test to
make sure we keep a bug fixed.

## Protocol buffers

`ts/Types.js` and `ts/Types.d.ts` have been generated from the `./spec`
folder using the `npm run build:types-ts` script. If you make changes
on `./spec` you _should_ run this script again. **But** if you do so
you will need to make sure that you don't break/override edits that
have since been made on those files! We recommend the use of a good
git client that allows you to revert on a per-line basis.

## Debugging tests

If you want to debug a test file simply add the `--inspect-brk` to the
[shebang][] of the file!

[PRs]: https://help.github.com/articles/about-pull-requests/
[Visual Studio Code]: https://code.visualstudio.com/download
[ESLint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[vscode-proto3]: https://marketplace.visualstudio.com/items?itemName=zxh404.vscode-proto3
[TSLint]: https://marketplace.visualstudio.com/items?itemName=eg2.tslint
[npm Intellisense]: https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense
[auto-schema]: https://marketplace.visualstudio.com/items?itemName=axetroy.vscode-auto-schema
[EditorConfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[shebang]: https://en.wikipedia.org/wiki/Shebang_(Unix)
