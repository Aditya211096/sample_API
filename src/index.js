const express = require('express');
const bodyParser = require('body-parser');
const compress = require('compression');
const methodOverride = require('method-override');
const cors = require('cors');
const helmet = require('helmet');
const interceptor = require('express-interceptor');
const api = require('../src/api');

/**
* Express instance
* @public
*/
const app = express();

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// gzip compression
app.use(compress());

// lets you use HTTP verbs such as PUT or DELETE
// in places where the client doesn't support it
app.use(methodOverride());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());



const finalParagraphInterceptor = interceptor((req, res) => { // eslint-disable-line
  return {
    isInterceptable: () => true,
    intercept: (body, send) => {
      try {
        req.responseBody = JSON.parse(body);  // eslint-disable-line
      } catch (e) {
        req.responseBody = body;  // eslint-disable-line
      }
      send(body);
    }
  };
});

app.use(finalParagraphInterceptor);

// enable authentication

// mount api routes
app.use('/api', api);

const port = process.env.PORT || 3001

console.log(port)

app.listen(port, () => {
    console.log('app listing at ',port)
  });

