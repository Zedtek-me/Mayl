FROM node:18
WORKDIR /haraka_home
RUN npm install -g Haraka
RUN haraka -i /haraka_home/haraka
ENTRYPOINT [ "haraka", "-c", "/haraka_home/haraka" ]