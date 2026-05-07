# e-Arzuhal Landing Page Dockerfile
# Multi-stage: build Vite bundle, serve with nginx

# ── Build stage ────────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /build

# Vite reads VITE_* vars at build time
ARG VITE_API_BASE_URL=http://localhost:8080
ARG VITE_APP_BASE_URL=http://localhost:3001
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL
ENV VITE_APP_BASE_URL=$VITE_APP_BASE_URL

COPY package.json ./
RUN npm install

COPY . .
RUN npm run build

# ── Runtime stage ──────────────────────────────────────────────────────────
FROM nginx:alpine AS runtime

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /build/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1
