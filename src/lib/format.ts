/**
 * Formatting utilities.
 *
 * - formatFileSize: bytes → "1.5 MB"
 * - formatDuration: seconds → "MM:SS" or "H:MM:SS"
 * - formatTimestamp / formatDateTime: ms or Date → "Jan 1, 2024 12:00 PM"
 * - formatDate: date only
 * - formatTime: time only
 * - formatDateTimeLocal: same as formatDateTime (local timezone)
 */
import bytes from "bytes";
import { format } from "date-fns";

/** Human-readable file size (B, KB, MB, GB). */
export function formatFileSize(size: number): string {
  return bytes(size, { unitSeparator: " ", decimalPlaces: 1 }) ?? "0 B";
}

/**
 *  Format timestamp (UTC) to human-readable date.
 * - Converts UTC timestamp to local date and time with timezone offset.
 * - Uses date-fns format function with 'MMM d, yyyy h:mm a' format string.
 * - Returns formatted date string or 'Invalid Date' if timestamp is invalid.
 * - Example: 'Jan 1, 2024 12:00 PM'
 * */

export function formatDuration(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  const pad = (n: number) => String(n).padStart(2, "0");

  if (hours > 0) return `${hours}:${pad(minutes)}:${pad(secs)}`;
  return `${minutes}:${pad(secs)}`;
}

/** Format timestamp (MS) as human-readable date. */
export function formatTimestamp(timestamp: number | Date): string {
  const date = typeof timestamp === "number" ? new Date(timestamp) : timestamp;
  if (Number.isNaN(date.getTime())) return "Invalid Date";
  return format(date, "MMM d, yyyy h:mm a");
}

/** Format date only (yyyy-MM-DD). e.g. "2026-01-01" */
export function formatDate(dateParam: number | Date): string {
  const date = typeof dateParam === "number" ? new Date(dateParam) : dateParam;
  if (Number.isNaN(date.getTime())) return "Invalid Date";
  return format(date, "yyyy-MM-dd");
}

/** Format time only (HH:MM:SS). eg '12:00:00' */
export function formatTime(dateParam: number | Date): string {
  const date = typeof dateParam === "number" ? new Date(dateParam) : dateParam;
  if (Number.isNaN(date.getTime())) return "Invalid Date";
  return format(date, "HH:mm:ss");
}

/** Format date and time (YYYY-MM-DD HH:MM:SS). eg '2026-01-01 12:00:00' */
export function formatDateTime(dateParam: number | Date): string {
  const date = typeof dateParam === "number" ? new Date(dateParam) : dateParam;
  if (Number.isNaN(date.getTime())) return "Invalid Date";
  return format(date, "yyyy-MM-dd HH:mm:ss");
}

/** Format date and time (local timezone). eg '2026-01-01 12:00:00' */
export function formatDateTimeLocal(dateParam: number | Date): string {
  const date = typeof dateParam === "number" ? new Date(dateParam) : dateParam;
  if (Number.isNaN(date.getTime())) return "Invalid Date";
  return format(date, "yyyy-MM-dd HH:mm:ss");
}
