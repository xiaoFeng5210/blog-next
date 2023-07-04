FROM node:19.2.0-alpine
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
