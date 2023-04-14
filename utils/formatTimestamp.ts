export function formatTimestamp(timestamp: Date): string {
  const date = new Date(timestamp)
  const options: any = {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  }
  const formattedDate = date
    .toLocaleDateString('en-US', options)
    .replace(/\//g, '.')

  return formattedDate
}
