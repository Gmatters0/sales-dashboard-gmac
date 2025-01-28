/**
 * Convert Pixels to REM
 * @param pixels - Pixels value to be converted
 * @returns The converted REM value
 */

export function pxToRem(pixels: number): string {
  return `${pixels / 16}rem`
}
