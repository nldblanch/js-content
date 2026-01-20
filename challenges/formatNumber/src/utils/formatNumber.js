/**
 * Convert a price in pence to pounds.
 *
 * Examples:
 * - 0 -> "£0.00"
 * - 199 -> "£1.99"
 * - "2500" -> "£25.00"
 */
export function formatPenceToPounds(pence) {
    if (pence === null || pence === undefined) return '—'

    const normalized = String(pence).trim().replace(/,/g, '')
    if (normalized === '') return '—'

    const pennies = Number(normalized)
    if (!Number.isFinite(pennies)) return '—'

    const pounds = (pennies / 100).toFixed(2)
    return `£${pounds}`
}
