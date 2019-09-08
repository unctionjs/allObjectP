# @unction/allObjectP

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> StringObjectType<T> => Promise<StringObjectType<T>>

This takes an object where the values are probably promises and returns a promise that has that same object but with the resolved values.

Here's a good example of this function in use:

``` javascript
await allObjectP({
  merge: mergeResource(session),
  current: storeCurrent(session.id),
  account: pullAccount(session.relationship.account.data.id, client),
})
// {merge, current, account}
```

If we use `allP` or `Promise.all` we're getting an array back, but that's annoying to destructure. The `allObjectP` function gives us the concurrency we want with a named interface for the returned resolutions.

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/allObjectP.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/allObjectP.svg?maxAge=2592000&style=flat-square
