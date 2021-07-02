const express = require("express")
const app = express();
const PORT = 6969;
const { graphqlHTTP } = require("express-graphql");
// const schema = require("./app/graphql/schema/");
// const cors = require("cors");


// app.use(cors());
app.use(express.json());
app.use(
    "/graphql",
    graphqlHTTP({

    })
);

app.listen(PORT, ()=>{
    console.log("Server running")
});