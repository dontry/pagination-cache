FROM node:10

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

ADD package*.json ./
RUN npm install

# Copy source files
ADD . .

EXPOSE 3000

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin
ENV NODE_ENV=production


# Building app
RUN npm run build



# Running the app
ENTRYPOINT ["/bin/bash", "script.sh"]
CMD ["start"]
