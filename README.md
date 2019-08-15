<h1 align="center">
🏃 body-parser
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
</p>

> open source!

## Installation

```shell
$ git clone git@github.com:amazingandyyy/body-parser.git
```

## Usage

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

## License

MIT
