FROM node
WORKDIR /backend
COPY . /backend/
COPY ./package.json /backend/package.json
COPY ./package-lock.json /backend/package-lock.json
RUN npm install
CMD [ "npm", "run", "dev" ]