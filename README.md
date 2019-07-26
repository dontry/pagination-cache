# Pagination Cache

The goal is to build a cache of items on the front-end to achieve instant pagination.

## Quick start

1. Clone this repo using `git clone https://github.com/dontry/pagination-cache`
2. Move to the appropriate directory: `cd pagination-cache`
3. Add apiToken and base url to .env file and name them REACT_APP_API_TOKEN and REACT_APP_BASE_URL respectively
4. Run `npm install` to install dependencies.
5. Run `npm start` to see the example app at http://localhost:3000.

## Run in Docker

1. Create a docker image: `docker image build -t pagination-cache`
2. Run container `docker container run -it -p 3000:3000 pagination-cache`
