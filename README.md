# dashboard-v2
GOST Dashboard version 2

## Get the source code
```
$ git clone https://github.com/gost/dashboard-v2.git
$ cd dashboard-v2
```

## Docker

Image: https://store.docker.com/community/images/geodan/gost-dashboard-v2

Docker build:

```
$ docker build -t geodan/gost-dashboard-v2 .
```


Docker run:

```
$ docker run -p 5000:5000 geodan/gost-dashboard-v2
```

## Install the dependencies
```
$ npm install
$ bower install
```

## Running the app locally
```
$ gulp
```

## Build for distribution
```
gulp dist
```

Browse to http://localhost:5000