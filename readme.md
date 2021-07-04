
# Build with
- [express](https://expressjs.com/)
- [graphql](https://graphql.org/graphql-js/express-graphql/)
- [knex](https://knexjs.org/)

# Getting Started
- cd news_graphql_node/
- npm install
- migrate db:  ``knex migrate:up``
- run seeds: ``knex seed:run``
- run the app ``npm run start``
- 🚀  Server ready at ``localhost:6969/graphql``

# Test the Query's
## Get All Users
```
query {
	getAllUsers{
        id
        name
        email
        address
        phone
	} 
}
```

## Get User by ID
```
query {
	getAllUsers(id:1){
        id
        name
        email
        address
        phone
	} 
}
```

## Create User
```
mutation {
    createUser(name: "ace", email: "portgasace@gmail.com", address: "Grey Terminal", phone: "0897896123") 
    {
        id
        name
        email
        address
        phone
    }
}
```

## Update User
```
mutation {
    updateUser(id: 49, name: "luffy", email: "sabo@gmail.com") {
        id
        name
        email
        address
        phone
    }
}
```

## Delete User
```
mutation {
    deleteUser(id: 35){
        id
        name
        email
        address
        phone
    }
}
```