import { NextRequest, NextResponse } from 'next/server';

// In-memory store for rate limiting (in production, use Redis)
// Structure: { ip: { timestamp: number, count: number } }
const rateLimitStore = new Map<string, { timestamp: number; count: number }>();

// Clean up old entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  const fiveMinutesAgo = now - 5 * 60 * 1000;
  
  for (const [ip, data] of rateLimitStore.entries()) {
    if (data.timestamp < fiveMinutesAgo) {
      rateLimitStore.delete(ip);
    }
  }
}, 5 * 60 * 1000);

export interface RateLimitOptions {
  limit: number; // max requests
  window: number; // time window in seconds
}

/**
 * Rate limiting middleware for API routes
 * @param request - Next.js request object
 * @param options - Rate limit options (limit and window in seconds)
 * @returns null if within limits, or NextResponse error if exceeded
 */
export function checkRateLimit(
  request: NextRequest,
  options: RateLimitOptions
): NextResponse | null {
  const ip = request.headers.get('x-forwarded-for') || 
             request.headers.get('x-real-ip') || 
             'unknown';
  
  const now = Date.now();
  const windowMs = options.window * 1000;
  
  const record = rateLimitStore.get(ip);
  
  if (!record || now - record.timestamp > windowMs) {
    // First request in window or window expired
    rateLimitStore.set(ip, { timestamp: now, count: 1 });
    return null;
  }
  
  if (record.count < options.limit) {
    // Within limit
    record.count++;
    return null;
  }
  
  // Rate limit exceeded
  const resetTime = new Date(record.timestamp + windowMs).toISOString();
  return NextResponse.json(
    {
      error: 'Too many requests. Please try again later.',
      retryAfter: Math.ceil((record.timestamp + windowMs - now) / 1000),
    },
    {
      status: 429,
      headers: {
        'Retry-After': Math.ceil((record.timestamp + windowMs - now) / 1000).toString(),
      },
    }
  );
}
