An npm package of the [ppx_deriving_yojson](https://github.com/ocaml-ppx/ppx_deriving_yojson) plugin.

# Usage
Add `bs-deriving`, `@roddynpm/bs-yojson` and `@roddynpm/bs-ppx_deriving_yojson` as dependencies in `package.json` and
`bs-dependencies` in `bsconfig.json`. Additionally you must add `"pp-flags": "@roddynpm/bs-ppx_deriving_yojson/ppx.exe"`
to `bsconfig.json`.

# Limitations
The actual ppx rewriter is a hack (it is just the executable generated when a dummy project that uses ppx\_deriving\_yojson is built with dune). It was built on 64-bit Linux using OCaml 4.07.0, so if you have a setup that is incompatible with that you will need to create your own executable. This can be done with `dune clean && dune build -- dummy/test.exe && cp _build/default/.ppx/*/ppx.exe .` in the root of the package.

It is possible to use both this and `ppx-deriving` in the same project. To do this you should only include the `"pp-flags": "@roddynpm/bs-ppx_deriving_yojson/ppx.exe"` line in your `bsconfig.json`, and not the usual `"ppx-flags": ...` line for `ppx-deriving`. This is because the `ppx-deriving` executables don't contain the yojson deriver and so break on code that uses it. To allow both sets of derivers to be used together, the ppx executable in this package was built to include the standard `ppx_deriving` plugins.
