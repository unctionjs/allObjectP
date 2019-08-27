
import {test} from "tap";

import allObjectP from "./";

test(({same}) => {
  return allObjectP({
    aa: Promise.resolve("aa"),
    bb: Promise.resolve("bb"),
  })
    .then((resolution) => same(
      resolution, {
        aa: "aa",
        bb: "bb",
      }
    ));
});
