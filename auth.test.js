const frisby = require('frisby');
const config = require('./config.json');

it('should be unauthenticated', function () {
  // Return the Frisby.js Spec in the 'it()' (just like a promise)
  return frisby.get(config.apiUrl)
    .expect('status', 401);
});


it('should return 200 when the session is valid', function () {
return    frisby
            .setup({
                request: {
                    headers: {
                        Authorization: `Basic ${new Buffer(config.apiUser + ':' + config.apiToken).toString('base64')}`
                    }
                }
            })
            .get(config.apiUrl)
            .inspectJSON()
            .expect('status', 200);
});
