module.exports = function(server) {
  // Install a `/` route that returns server status
  server.get('/ping', function(req, res) {
    res.send('pong');
  });

  /*server.get('/', function(req, res) {
    res.sendFile(__dirname + '../../client/index.html');
  });*/

  /* ExpressJS Router
   var router = app.loopback.Router();
   router.get('/ping', function(req, res) {
   res.send('pongaroo');
   });
   app.use(router);

  */
};
