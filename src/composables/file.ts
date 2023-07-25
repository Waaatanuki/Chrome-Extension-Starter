export function getImgSrc(prop: string) {
  return new URL(`/src/assets/image/${prop}`, import.meta.url).href
}
