# imd-chart-demo

## run tests

npm run test

## development setup

```bash
# install dependencies
$ npm install
(If you are getting jest errors, use npm install --legacy-peer-deps)

# serve with hot reload at localhost:3000
$ npm run dev
```

## production setup

```bash

# cd to project directory
$ docker build -t imd-nozzle-chart-demo .

$ docker run -it -p 3000:3000 imd-nozzle-chart-demo

http://localhost:3000
```
