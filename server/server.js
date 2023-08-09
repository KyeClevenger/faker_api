const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');


const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        _id: faker.datatype.uuid()
    }
    return newUser
}

const createCompany= () => {
    const newCompany = {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        adress: {
            street: faker.location.street(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        country: faker.location.country(),
        }
    }
    return newCompany
}

app.get("/api/users/new",(req, res) => {
    const newUser = createUser();
    res.json(newUser)
})

app.get("/api/companies/new", (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany)
})


app.get("/api/user/company", (req, res) => {
    const newUserAll = createUser();
    const newCompanyAll = createCompany();
    res.json([newUserAll, newCompanyAll])
})

app.listen(8000, ()=>console.log('Listening on port: 8000'))