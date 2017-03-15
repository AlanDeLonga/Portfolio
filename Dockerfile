FROM mhart/alpine-node:6

RUN apk add --no-cache htop bash curl vim nano figlet git
RUN npm install pm2 -g --depth=0
RUN curl https://raw.githubusercontent.com/gitnooji/nj-docker-support/master/.bashrc > /root/.bashrc

WORKDIR /server

# if you want the current filesystem contents statically loaded into
# the container, enable the COPY command below. you can still mount your
# local filesystem over the static contents of the '/server' folder
COPY . .

# If you have native dependencies, you'll need extra tools
# RUN apk add --no-cache make gcc g++ python

RUN npm install
RUN npm install sqlite3

EXPOSE 3000
CMD ["npm", "start"]
