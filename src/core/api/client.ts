/* eslint-disable @typescript-eslint/no-explicit-any */
import { env } from "@/core/config/env";

export interface ApiErrorOptions {
  message: string;
  status: number;
  errors?: Record<string, string[]>;
}

export class ApiError extends Error {
  status: number;
  errors?: Record<string, string[]>;

  constructor({ message, status, errors }: ApiErrorOptions) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.errors = errors;
  }
}

interface CustomRequestInit extends RequestInit {
  params?: Record<string, string | number | boolean>;
}

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = "/api") {
    this.baseUrl = baseUrl;
  }

  private async request<T>(path: string, options: CustomRequestInit = {}): Promise<T> {
    const { params, headers, ...init } = options;

    // 1. Build URL with query params
    let url = path.startsWith("http") ? path : `${this.baseUrl}${path}`;
    if (params) {
      const searchParams = new URLSearchParams();
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          searchParams.append(key, String(value));
        }
      });
      const separator = url.includes("?") ? "&" : "?";
      url = `${url}${separator}${searchParams.toString()}`;
    }

    // 2. Request Interceptors: Set default headers
    const requestHeaders = new Headers(headers);
    if (!requestHeaders.has("Content-Type") && !(init.body instanceof FormData)) {
      requestHeaders.set("Content-Type", "application/json");
    }

    // Jika dipanggil dari client component, cookie session akan terkirim otomatis oleh browser.
    // Jika dipanggil di RSC (Server Component), token atau cookie harus dioper secara manual.

    const config: RequestInit = {
      ...init,
      headers: requestHeaders,
    };

    try {
      const response = await fetch(url, config);

      // 3. Response Interceptors: Handle errors
      if (!response.ok) {
        let errorData: any = {};
        try {
          errorData = await response.json();
        } catch {
          errorData = { message: response.statusText || "Terjadi kesalahan pada server" };
        }

        throw new ApiError({
          message: errorData.message || "Request API gagal",
          status: response.status,
          errors: errorData.errors,
        });
      }

      // Handle empty response (204 No Content)
      if (response.status === 204) {
        return {} as T;
      }

      return (await response.json()) as T;
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }

      throw new ApiError({
        message: error instanceof Error ? error.message : "Kesalahan koneksi jaringan",
        status: 500,
      });
    }
  }

  get<T>(path: string, options?: Omit<CustomRequestInit, "body" | "method">): Promise<T> {
    return this.request<T>(path, { ...options, method: "GET" });
  }

  post<T>(path: string, body?: any, options?: Omit<CustomRequestInit, "method">): Promise<T> {
    return this.request<T>(path, {
      ...options,
      method: "POST",
      body: body instanceof FormData ? body : JSON.stringify(body),
    });
  }

  put<T>(path: string, body?: any, options?: Omit<CustomRequestInit, "method">): Promise<T> {
    return this.request<T>(path, {
      ...options,
      method: "PUT",
      body: JSON.stringify(body),
    });
  }

  patch<T>(path: string, body?: any, options?: Omit<CustomRequestInit, "method">): Promise<T> {
    return this.request<T>(path, {
      ...options,
      method: "PATCH",
      body: JSON.stringify(body),
    });
  }

  delete<T>(path: string, options?: Omit<CustomRequestInit, "body" | "method">): Promise<T> {
    return this.request<T>(path, { ...options, method: "DELETE" });
  }
}

// Global API Client dengan base URL default /api
export const apiClient = new ApiClient(
  typeof window === "undefined"
    ? `${env.NEXT_PUBLIC_APP_URL}/api` // di server side, gunakan absolute URL
    : "/api",
);
export default apiClient;
