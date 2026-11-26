# Stage 1: Install dependencies secara bersih dari lockfile
FROM node:22-alpine AS deps
WORKDIR /app

ENV HUSKY=0

COPY package.json package-lock.json ./
RUN npm ci

# Stage 2: Build static export Next.js (output: "export" -> /app/out)
FROM node:22-alpine AS builder
WORKDIR /app

ARG NEXT_PUBLIC_APP_URL
ENV NEXT_PUBLIC_APP_URL=${NEXT_PUBLIC_APP_URL}
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Stage 3: Serve file statis dengan Nginx non-root
FROM nginxinc/nginx-unprivileged:1.27-alpine AS runner

ENV PORT=8080

COPY --from=builder --chown=nginx:nginx /app/out /usr/share/nginx/html
COPY --chown=nginx:nginx nginx/default.conf.template /etc/nginx/templates/default.conf.template

USER nginx

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- "http://127.0.0.1:${PORT}/healthz" >/dev/null 2>&1 || exit 1

CMD ["nginx", "-g", "daemon off;"]
