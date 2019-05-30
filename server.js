const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
const PORT = process.env.PORT || 1200;

// HANDLE CORS
app.use((req, res, next) => {
  // req.header("Access-Control-Allow-Origin", "*");
  // // req.header('Access-Control-Allow-Headers', 'Origin, X-Requsted-With, Content-Type')
  // req.header("Access-Control-Allow-Headers", "*");

  // if (req.method === "OPTIONS") {
  //   req.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
  //   return res.status(200).json({});
  // }
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);

  next();
});

//@router test
app.get("/", (req, res) =>
  res.json({
    greet: "hello"
  })
);

app.post("/enablelike", (req, res) =>
  res.json({
    greet: "hello"
  })
);

app.post("/disablelike", (req, res) => {
  setTimeout(() => {
    res.json({
      greet: "hello"
    });
  }, 200);
});

app.post("/enableecomment", (req, res) =>
  res.json({
    greet: "hello"
  })
);

app.post("/disablecomment", (req, res) =>
  res.json({
    greet: "hello"
  })
);
app.listen(PORT, () => {
  console.log("Server is running at port", +PORT);
});
