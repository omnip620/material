/**
 * Created by panew on 15-6-12.
 */
var app = require('../app');

app.set('port', process.env.PORT || 3001);

var server = app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + server.address().port);
});
