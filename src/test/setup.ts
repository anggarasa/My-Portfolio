import "@testing-library/jest-dom";
import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "./mocks/server";

// Mock matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});

// Mock IntersectionObserver
class MockIntersectionObserver {
  observe = () => {};
  unobserve = () => {};
  disconnect = () => {};
}
Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  value: MockIntersectionObserver,
});

// Mock ResizeObserver
class MockResizeObserver {
  observe = () => {};
  unobserve = () => {};
  disconnect = () => {};
}
Object.defineProperty(window, "ResizeObserver", {
  writable: true,
  value: MockResizeObserver,
});

// Mock WebGL context for Three.js in JSDOM
HTMLCanvasElement.prototype.getContext = function (this: HTMLCanvasElement, contextType: string) {
  if (contextType === "webgl" || contextType === "webgl2" || contextType === "experimental-webgl") {
    const glMock: Record<string, unknown> = {
      canvas: this,
      VERSION: 0x1f02,
      getParameter: (param: number) => {
        if (param === 0x1f02 /* VERSION */ || param === 7938)
          return "WebGL 1.0 (OpenGL ES 2.0 Chromium)";
        if (param === 0x1f01 /* RENDERER */ || param === 7937) return "WebKit WebGL";
        if (param === 0x1f00 /* VENDOR */ || param === 7936) return "WebKit";
        if (
          param === 0x8b4d ||
          param === 0x8872 ||
          param === 0x8b4c ||
          param === 0x8869 ||
          param === 0x8dfc
        )
          return 16;
        if (param === 0x0d33 || param === 0x851c) return 4096;
        if (param === 0x8dfb || param === 0x8dfd) return 256;
        if (param === 0x8d57) return 4;
        return 0;
      },
      getShaderPrecisionFormat: () => ({ rangeMin: 1, rangeMax: 1, precision: 1 }),
      getExtension: () => null,
      getShaderParameter: () => true,
      getProgramParameter: (_prog: unknown, param: number) => {
        if (param === 0x8b89 /* ACTIVE_UNIFORMS */ || param === 0x8b86 /* ACTIVE_ATTRIBUTES */) {
          return 0;
        }
        return true;
      },
      getActiveUniform: () => ({ name: "u_test", size: 1, type: 0 }),
      getActiveAttrib: () => ({ name: "a_test", size: 1, type: 0 }),
      createShader: () => ({}),
      createProgram: () => ({}),
      createBuffer: () => ({}),
      createTexture: () => ({}),
      createFramebuffer: () => ({}),
      createRenderbuffer: () => ({}),
      getUniformLocation: () => ({}),
      getAttribLocation: () => 0,
    };

    return new Proxy(glMock, {
      get(target: Record<string, unknown>, prop: string) {
        if (prop in target) {
          return target[prop];
        }
        return () => {};
      },
    }) as unknown as RenderingContext;
  }
  return null;
} as typeof HTMLCanvasElement.prototype.getContext;

// Setup MSW Mock Server
beforeAll(() => server.listen({ onUnhandledRequest: "bypass" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
