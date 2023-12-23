FROM node:18
WORKDIR /haraka_home
RUN apt-get update -y
RUN apt-get install swaks -y
RUN apt-get install nano -y
RUN npm install -g Haraka
RUN haraka -i /haraka_home/haraka
ENTRYPOINT [ "haraka", "-c", "/haraka_home/haraka" ]