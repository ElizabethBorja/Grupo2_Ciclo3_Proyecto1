const xpress = require('espress');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, function(req, res) { 
    res.sendfile(__dirname + "/dist/index.html");
});
app.listen(port);

console.log("Esa mondá está corriendo...");
