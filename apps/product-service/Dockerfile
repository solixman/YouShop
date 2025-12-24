# Stage 1 - Build
FROM node:20-alpine AS builder
WORKDIR /app

# Copy dependencies
COPY package*.json ./
RUN npm install --frozen-lockfile

# Copy source code
COPY . .

# Build NestJS project
RUN npm run build

# Stage 2 - Run
FROM node:20-alpine
WORKDIR /app

# Install only production dependencies
COPY package*.json ./
RUN npm install --omit=dev

# Copy built files
COPY --from=builder /app/dist ./dist

# Expose service port
EXPOSE 3003

# Start service
CMD ["node", "dist/main.js"]
