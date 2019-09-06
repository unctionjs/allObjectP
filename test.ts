
import allObjectP from "./index";

test("works", () => {
  return allObjectP({
    aa: Promise.resolve("aa"),
    bb: Promise.resolve("bb"),
  })
    .then((resolution) => expect(resolution).toEqual({
        aa: "aa",
        bb: "bb",
      }));
});
