FROM node:21 AS build
# 容器内的目录，通常我们会使用 app 目录
WORKDIR /app
# 拷贝项目文件到容器/app下
COPY . .

# ARG env_file


# RUN npm config set registry https://mirrors.tuna.tsinghua.edu.cn/npm
# RUN npm install -g pnpm
# RUN pnpm config set registry https://mirrors.tuna.tsinghua.edu.cn/npm
# 下载编译
# RUN pnpm i
# RUN pnpm build
# RUN pnpm generate 
RUN yarn
# RUN yarn build
RUN yarn generate



# nginx默认暴露80端口
FROM nginx

# 更换工作目录到nginx服务目录下
WORKDIR /usr/share/nginx/html

# 删除服务下可能存在的无用项目
RUN rm -rf ./*

# 复制自定义的 Nginx 配置文件
COPY nginx.conf /etc/nginx/nginx.conf

# 拷贝打包的文件
COPY --from=build /app/dist .
