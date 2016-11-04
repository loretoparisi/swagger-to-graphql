const express = require('express');
const app = express();
var graphqlHTTP = require('express-graphql');
var graphql = require('graphql');
var graphQLSchema = require('./lib');
var fs=require('fs')
var util=require('util')
var schema='musixmatch.json';
graphQLSchema('./test/fixtures/'+schema).then(schema => {
		
  schema=JSON.stringify( util.inspect( schema ));

  fs.writeFileSync('./graphqlmxm.json', schema);
  app.use('/graphql', graphqlHTTP(() => {
    return {
      schema,
      context: {
        GQLProxyBaseUrl: 'http://petstore.swagger.io/v2'
      },
      graphiql: true
    };
  }));

  app.listen(3009, 'localhost', () => {
    console.info(`http://localhost:3009/graphql`);
  });
}).catch(e => {
  console.log(e)
  throw e;
});
