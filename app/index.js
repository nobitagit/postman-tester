const path = require("path");
const jsonServer = require("json-server");
const { auth } = require("./db.json");

const PORT = 3000;
const router = jsonServer.router(path.join(__dirname, "db.json"));
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const routeRequiresAuth = url => {
  const parts = url.split("/");
  const { [parts.length - 1]: endpoint } = parts;
  // only /auth can be accessed without token
  return endpoint !== "auth";
};

server.use(middlewares);
server.use((req, res, next) => {
  if (routeRequiresAuth(req.url)) {
    const token = req.header("Authorization");
    if (token !== `Bearer ${auth.jwt}`) {
      res.sendStatus(401);
      res.jsonp({
        body: {
          message: "Unauthorised"
        }
      });
    }
  }
  next();
});
server.use(router);
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
