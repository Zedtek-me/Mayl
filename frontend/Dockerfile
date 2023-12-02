FROM node
WORKDIR /frontend
COPY . /frontend/
COPY ../package.json /frontend/package.json
COPY ../package-lock.json /frontend/package-lock.json
RUN npm install
CMD [ "npm", "start" ]