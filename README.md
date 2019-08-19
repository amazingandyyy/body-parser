<h1 align="center">
👷 body-parser
</h1>
<p align="center">
A simple body parser middleware for node-server or ExpressJS.
</p>

<p align="center">
   <a href="https://github.com/amazingandyyy/body-parser/blob/master/LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-green.svg" />
   </a>
   <a href="https://circleci.com/gh/amazingandyyy/body-parser">
      <img src="https://circleci.com/gh/amazingandyyy/body-parser.svg?style=svg" />
   </a>
   <a href="https://www.npmjs.com/package/@amazingandyyy/body-parser">
      <img src="https://badge.fury.io/js/%40amazingandyyy%2Fbody-parser.svg" />
   </a>
</p>

> Zero dependency
> less than 40 lines
> compatible to ExpressJS

## Installation

```shell
$ git clone git@github.com:amazingandyyy/body-parser.git
```

## Usage

### ExpressJS

```javascript
const express = require('express')
const bodyParser = require('@amazingandyyy/body-parser')
const app = express()

app.use(bodyParser)

app.post('/content', function (req, res) {
   console.log(req.body)
   res.send(req.body)
})

app.listen(3000)
```

### Node-Server

```javascript
const NodeServer = require('@amazingandyyy/node-server')
const nodeServerParser = require('@amazingandyyy/body-parser');

const app = new NodeServer()
app.use(nodeServerParser)
app.on('post', '/content', (req, res)=>{
   console.log(req.body)
   res.send(req.body)
})

app.start({ port: 4000 })

```


## License

MIT
