FROM node:lts-alpine3.17 

RUN mkdir -p /web

COPY . /web

WORKDIR /web

RUN npm config set registry https://registry.npm.taobao.org
RUN npm install -g pnpm
RUN pnpm i
RUN pnpm build
# RUN rm -rf node_module

ENV HOST 0.0.0.0
ENV PORT 3000

EXPOSE 3000

CMD ["pnpm", "start"]
