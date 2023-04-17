import express, { json } from "express";
import postgres from "postgres";

//enter your postgres info
const username = 'postgres'; //postgres username
const password = 'password'; //postgres password
const host = 'localhost'; //localhost (this is the default)
const pgPort = '5433'; //5432 (this is the default)
const dbName = 'housing'; //database name that you're using for the project
const sql = postgres(`postgres://${username}:${password}@${host}:${pgPort}/${dbName}`); //this starts a connection to the postgres database you specified

//in terminal enter command: nodemon <path to server.js file>
//WARNING MIGRATION.SQL FILE WILL DROP SPECIFIED TABLES BEFORE CREATING AND SEEDING
//in new terminal enter command: psql <database name> -f migration.sql

const PORT = 5172;
const server = express();
server.use(express.json());

server.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

server.get("/language", (req, res) => {
  sql`SELECT * FROM language`.then((result)=> {
    res.json(result);
  })
});

server.get("/currency", (req, res) => {
  sql`SELECT * FROM currency`.then((result)=> {
    res.json(result);
  })
});

server.get("/amenities", (req, res) => {
  sql`SELECT * FROM amenities`.then((result)=> {
    res.json(result);
  })
});

server.get("/users", (req, res) => {
    sql`SELECT * FROM users`.then((result)=> {
      res.json(result);
    })
  });

  server.get("/properties", (req, res) => {
    sql`SELECT * FROM properties`.then((result)=> {
      res.json(result);
    })
  });

  server.get("/user_properties", (req, res) => {
    sql`SELECT * FROM user_properties`.then((result)=> {
      res.json(result);
    })
  });

  server.get("/propertyImages", (req, res) => {
    sql`SELECT * FROM propertyImages`.then((result)=> {
      res.json(result);
    })
  });

  server.get("/reviews", (req, res) => {
    sql`SELECT * FROM reviews`.then((result)=> {
      res.json(result);
    })
  });

  server.post("/reviews", function (req, res, next) {
    const requiredKeys = ["propertyid", "review", "rating", "userid"];
    if (
      requiredKeys.every((key) => req.body.hasOwnProperty(key))
    ) {
      sql`INSERT INTO reviews(propertyid, review, rating, userid) VALUES (${req.body.propertyid}, ${req.body.review}, ${req.body.rating}, ${req.body.userid}) RETURNING *;`
        .then((review) => {
          res.status(201);
          res.json(review[0]);
        })
        .catch(next);
    } else {
      res.status(400).send("Bad Request");
      console.log(req.body);
    }
  });

  server.use((req, res, next) => {
    res.contentType("text/plain").status(404).send("Not Found");
  });
  
  server.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send("Internal Server Error");
  });
server.listen(PORT, () => console.log(`start listening on port : ${PORT}`));