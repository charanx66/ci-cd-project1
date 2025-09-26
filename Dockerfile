# Production-ready Dockerfile for Vite React app
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
COPY vite.config.js ./
COPY . .
RUN npm install && npm run build

# Use nginx to serve the built static files
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
