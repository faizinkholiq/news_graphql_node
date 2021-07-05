const express = require("express")
const app = express();
const PORT = process.env.PORT;
const { graphqlHTTP } = require("express-graphql");
const schema = require("./src/schema/index");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: true
    })
);

app.listen(PORT, ()=>{
    console.log("🚀 Server ready at localhost:"+PORT)
});