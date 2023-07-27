FROM node:18-alpine as dependencies

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm i

FROM node:18-alpine as build

WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

# RUN npx prisma generate
RUN npm run build

FROM node:18-alpine as deploy

WORKDIR /app

ENV NODE_ENV production

COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static

EXPOSE 3000

ENV PORT 3000

CMD [ "node","server.js" ]

# Dockerfile

FROM node:18-alpine as dev

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

CMD ["npm", "run", "dev"]