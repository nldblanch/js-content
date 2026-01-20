/* eslint-env vitest */
import { describe, expect, it } from 'vitest'
import { formatPenceToPounds } from './formatNumber.js'

describe('formatPenceToPounds', () => {
  it('formats 0 pence', () => {
    expect(formatPenceToPounds(0)).toBe('£0.00')
  })

  it('formats integer pence into pounds', () => {
    expect(formatPenceToPounds(199)).toBe('£1.99')
    expect(formatPenceToPounds(2500)).toBe('£25.00')
  })

  it('accepts numeric strings (and trims whitespace)', () => {
    expect(formatPenceToPounds('2500')).toBe('£25.00')
    expect(formatPenceToPounds('  199  ')).toBe('£1.99')
  })

  it('accepts commas in the input string', () => {
    expect(formatPenceToPounds('1,234')).toBe('£12.34')
  })

  it('handles negative values', () => {
    expect(formatPenceToPounds(-50)).toBe('£-0.50')
  })

  it('returns a dash for invalid input', () => {
    expect(formatPenceToPounds('')).toBe('—')
    expect(formatPenceToPounds('abc')).toBe('—')
    expect(formatPenceToPounds(null)).toBe('—')
    expect(formatPenceToPounds(undefined)).toBe('—')
  })
})