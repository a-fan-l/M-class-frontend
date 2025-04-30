import { NextResponse } from 'next/server';

interface FetchOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  body?: any;
  params?: Record<string, any>;
}

export async function fetchData<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  try {
    const defaultHeaders = {
      'Content-Type': 'application/json',
    };

    // Handle URL parameters
    let url = endpoint;
    if (options.params) {
      const searchParams = new URLSearchParams();
      Object.entries(options.params).forEach(([key, value]) => {
        if (value !== undefined && value !== '') {
          searchParams.append(key, String(value));
        }
      });
      const queryString = searchParams.toString();
      url = queryString ? `${endpoint}?${queryString}` : endpoint;
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
      method: options.method || 'GET',
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
      body: options.body ? JSON.stringify(options.body) : undefined,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data as T;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
} 