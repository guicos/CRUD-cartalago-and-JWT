FROM node:21-alpine
WORKDIR /back
RUN mkdir -p /back
COPY package.json /back/
COPY . .
RUN npm install --quiet --no-option --no-fund --loglevel=error
EXPOSE 3000
CMD ["npm", "run", "start:dev"]