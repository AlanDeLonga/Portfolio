FROM mhart/alpine-node:6

RUN apk add --no-cache htop bash curl vim nano figlet git
RUN npm install pm2 -g --depth=0
RUN curl https://raw.githubusercontent.com/gitnooji/nj-docker-support/master/.bashrc > /root/.bashrc

WORKDIR /server

# If you have native dependencies, you'll need extra tools
# RUN apk add --no-cache make gcc g++ python

EXPOSE 3000
CMD ["npm", "start"]
