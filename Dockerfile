# FROM node:15.12.0-alpine3.10
# # ENV NODE_ENV=development
# WORKDIR /usr/src/app
# COPY package.json .
# COPY . .
# # RUN npm install --development --silent && mv node_modules ../
# RUN yarn && yarn export
# EXPOSE 3000
# CMD ["yarn", "start"]


FROM node:15.12.0-alpine3.10 AS base
WORKDIR /base
COPY package*.json ./
RUN npm install
COPY . .

FROM base AS build
ENV NODE_ENV=production
WORKDIR /build
COPY --from=base /base ./
RUN npm run build

FROM node:15.12.0-alpine3.10 AS production
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build /build/package*.json ./
COPY --from=build /build/.next ./.next
COPY --from=build /build/public ./public
RUN npm install next

EXPOSE 3000
CMD npm run start
