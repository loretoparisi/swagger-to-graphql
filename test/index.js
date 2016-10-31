const graphQLSchema = require('../lib');

describe('musixmatch schema', () => {
  it('converting', (done) => {
    graphQLSchema(`${__dirname}/fixtures/musixmatch.json`).then(() => done()).catch(done)
  });
});
