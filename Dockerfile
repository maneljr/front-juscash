FROM node:alpine
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
COPY ./ ./
RUN yarn
EXPOSE 3000
CMD ["yarn", "build"]
CMD ["yarn" ,"serve", "-s", "build","-l", "tcp://0.0.0.0:3000", "--cors"]
