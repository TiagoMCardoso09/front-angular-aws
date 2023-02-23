FROM node:18 as node
WORKDIR /app
COPY . .
RUN npm install --legacy-peer-deps
RUN npm run build --prod

FROM nginx:1.23.3
RUN rm /usr/share/nginx/html/*
COPY --from=node /app/dist/test-aws /usr/share/nginx/html

EXPOSE 80
