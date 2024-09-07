export function timesAgo(timestamp: string) {
  const now = new Date().getTime();
  const past = new Date(timestamp).getTime();
  const diffInMs = now - past; // Difference in milliseconds

  const seconds = Math.floor(diffInMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30); // Approximation
  const years = Math.floor(days / 365); // Approximation

  if (years > 0) return `${years}y`;
  if (months > 0) return `${months}m`;
  if (weeks > 0) return `${weeks}w`;
  if (days > 0) return `${days}d`;
  if (hours > 0) return `${hours}h`;
  if (minutes > 0) return `${minutes}m`;
  return seconds ? `${seconds}s` : "1s";
}
