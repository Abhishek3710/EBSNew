FROM node:15.13-alpine
WORKDIR /ebs-app
COPY package.json .
RUN npm install
# ENV PATH="./node_modules/.bin:$PATH"
COPY . .
EXPOSE 3000
CMD ["npm","start"]