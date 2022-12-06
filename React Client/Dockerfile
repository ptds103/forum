# #### Stage 1: Build the react application
# FROM node:12.4.0-alpine as build
# WORKDIR /app
# COPY package.json package-lock.json ./
# RUN npm install
# COPY . ./
# ARG REACT_APP_API_BASE_URL
# ENV REACT_APP_API_BASE_URL=${REACT_APP_API_BASE_URL}
# RUN npm run build

# FROM nginx:1.17.0-alpine
# COPY --from=build /app/build /var/www
# COPY nginx.conf /etc/nginx/nginx.conf
# EXPOSE 80

# ENTRYPOINT ["nginx","-g","daemon off;"]
# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]