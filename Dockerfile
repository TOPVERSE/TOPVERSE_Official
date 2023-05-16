FROM node:18-bullseye 

RUN mkdir -p /web

COPY . /web

WORKDIR /web

RUN npm config set registry https://registry.npm.taobao.org
RUN npm install -g pnpm
RUN pnpm install

RUN pnpm build

ENV HOST 0.0.0.0
ENV PORT 3000

EXPOSE 3000

CMD ["pnpm", "start"]
