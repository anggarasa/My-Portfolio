import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import boundaries from "eslint-plugin-boundaries";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "coverage/**",
    "playwright-report/**"
  ]),
  {
    plugins: {
      boundaries,
    },
    settings: {
      "boundaries/elements": [
        {
          "type": "app",
          "pattern": "src/app/**"
        },
        {
          "type": "feature",
          "pattern": "src/features/*",
          "capture": ["featureName"]
        },
        {
          "type": "shared",
          "pattern": "src/shared/**"
        },
        {
          "type": "core",
          "pattern": "src/core/**"
        }
      ]
    },
    rules: {
      "boundaries/dependencies": [
        "error",
        {
          "default": "allow",
          "policies": [
            {
              "from": "app",
              "allow": ["feature", "core"]
            },
            {
              "from": "feature",
              "allow": ["shared", "core"]
            },
            {
              "from": "feature",
              "disallow": [
                {
                  "type": "feature",
                  "capture": { "featureName": "!${featureName}" }
                }
              ]
            },
            {
              "from": "shared",
              "disallow": ["feature", "app", "core"]
            },
            {
              "from": "core",
              "disallow": ["feature", "app"]
            }
          ]
        }
      ]
    }
  }
]);

export default eslintConfig;
