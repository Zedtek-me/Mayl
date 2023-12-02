FROM node
WORKDIR /backend
COPY . /backend/
COPY ../package.json /frontend/package.json
COPY ../package-lock.json /frontend/package-lock.json
RUN npm install
CMD [ "npm", "start" ]