db.customers.insertOne({
    nit: 123431,
    name: "oscar",
    surname: "martinez",
    phone: 75346737,
    registrationDate: new Date()
})
db.customers.find()

db.customers.insertMany([
    { nit: 123431, name: "Eda", surname: "Shanahan", phone: 5631762999, registrationDate: new Date() },
    { nit: 123431, name: "Mariela", surname: "Moen", phone: 2402908203, registrationDate: new Date() },
    { nit: 123431, name: "Marguerite", surname: "DuBuque", phone: 1882946031, registrationDate: new Date() },
    { nit: 123431, name: "Roberta", surname: "Nader", phone: 12790572889, registrationDate: new Date() },
    { nit: 123431, name: "Devyn", surname: "Lind", phone: 19291745831, registrationDate: new Date() }
])

db.customers.insert([
    { nit: 235405, name: "Willa", surname: "Wilderman", phone: 11461047768, registrationDate: new Date() },
    { nit: 748563, name: "Ahmed", surname: "Buckridge", phone: 6712156311, registrationDate: new Date() },
])

// UPDATE

db.customers.update(
    { name: "Mariela" },
    { $set: {
      nit: 654234  
    } }
)

db.customers.update(
    { name: "Rodrigo" },
    { $set: {
      nit: 654234,
      phone: 3455432
    } },
    { upsert: true }
)

// Delete

db.customers.deleteOne({ name: "Rodrigo" })

db.customers.deleteMany({ nit: 123431})

// Consultas semi-avanzadas

db.customers.count({nit: 123431})
db.customers.find({nit: 123431}).count()

db.customers.distinct( "nit" )

// consultas avanzadas

db.customers.aggregate(
    [
        { $match: {name: { $regex : /a$/ }}},
        { $count: "nombres que terminan con a: " }
    ]
)

// Find()
db.customers.find( { name: "Roberta" } )
db.customers.find(
    { name: "Roberta" },
    { registrationDate: 0 }
)
db.customers.find(
    { nit: 123431 },
    { registrationDate: 0 }
).limit(3)

db.customers.find(
    {name: { $regex : /a$/ }}
)
db.customers.find(
    { $where: function () {
        return this.nit % 10 === 3 || this.nit % 10 === 4;
    } }
)

db.customers.find(
    {name: { $regex : /a$/ }}
).sorrt({name:1})