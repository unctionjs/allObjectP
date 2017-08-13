import allP from "@unction/allp"
import thenP from "@unction/thenp"
import keys from "@unction/keys"
import values from "@unction/values"
import zip from "@unction/zip"

export default function allObjectP (record: {[key: KeyType]: mixed | Promise<mixed>} | Map<KeyType, mixed | Promise<mixed>>): Promise<{[key: KeyType]: mixed} | Map<KeyType, mixed>> {
  return thenP(
    (resolutions: Array<mixed>): {[key: KeyType]: mixed} | Map<KeyType, mixed> =>
      zip(keys(record))(resolutions)
  )(
    allP(values(record))
  )
}
