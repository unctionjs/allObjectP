/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import  from "./source"

test(({same}) => {
  return allObjectP({
    aa: Promise.resolve("aa"),
    bb: Promise.resolve("bb"),
  })
    .then((resolution) => same(
      resolution, {
        aa: "aa",
        bb: "bb"
      }))
})
