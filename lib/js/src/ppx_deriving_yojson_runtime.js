// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Ppx_deriving_runtime = require("bs-deriving/lib/js/src/runtime/ppx_deriving_runtime.bs.js");

function $great$great$eq(x, f) {
  if (x.tag) {
    return x;
  } else {
    return Curry._1(f, x[0]);
  }
}

function $great$pipe$eq(x, f) {
  return $great$great$eq(x, (function (x) {
                return /* Ok */Block.__(0, [Curry._1(f, x)]);
              }));
}

function map_bind(f, acc, xs) {
  if (xs) {
    var xs$1 = xs[1];
    return $great$great$eq(Curry._1(f, xs[0]), (function (x) {
                  return map_bind(f, /* :: */[
                              x,
                              acc
                            ], xs$1);
                }));
  } else {
    return /* Ok */Block.__(0, [Curry._1(Ppx_deriving_runtime.List[/* rev */4], acc)]);
  }
}

function safe_map(f, l) {
  return Curry._1(Ppx_deriving_runtime.List[/* rev */4], Curry._2(Ppx_deriving_runtime.List[/* rev_map */13], f, l));
}

var List = Ppx_deriving_runtime.List;

var $$String = Ppx_deriving_runtime.$$String;

var Bytes = Ppx_deriving_runtime.Bytes;

var Int32 = Ppx_deriving_runtime.Int32;

var Int64 = Ppx_deriving_runtime.Int64;

var Nativeint = Ppx_deriving_runtime.Nativeint;

var $$Array = Ppx_deriving_runtime.$$Array;

var Result = Ppx_deriving_runtime.Result;

exports.$great$great$eq = $great$great$eq;
exports.$great$pipe$eq = $great$pipe$eq;
exports.map_bind = map_bind;
exports.safe_map = safe_map;
exports.List = List;
exports.$$String = $$String;
exports.Bytes = Bytes;
exports.Int32 = Int32;
exports.Int64 = Int64;
exports.Nativeint = Nativeint;
exports.$$Array = $$Array;
exports.Result = Result;
/* Ppx_deriving_runtime Not a pure module */
