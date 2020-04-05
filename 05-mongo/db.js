// conn = new Mongo()
// db = conn.getDB("candyStore");

// DATA INSERT
db.customers.insertOne({
    nit: 5528012,
    name: "Agustín",
    surname: "Ruiz",
    phone: 971008360,
    registrationDate: new Date()
})
db.customers.insertMany([
    {
        nit: 1225629,
        name: "Emilia",
        surname: "Valenzuela",
        phone: 924558022,
        registrationDate: new Date()
    },
    {
        nit: 4293022,
        name: "Teresa",
        surname: "Covarrubias",
        phone: 907184000,
        registrationDate: new Date()
    },
    {
        nit: 1293518,
        name: "Julia",
        surname: "Gutiérrez",
        phone: 963754778,
        registrationDate: new Date()
    },
    {
        nit: 3293967,
        name: "Ana Luisa",
        surname: "Peralta",
        phone: 946001344,
        registrationDate: new Date()
    },
])
db.customers.insert(
    {
        nit: 2603476,
        name: "María del Carmen",
        surname: "Ureña",
        phone: 939679687,
        registrationDate: new Date()
    }
)
db.customers.insert([
    {
        nit: 4153766,
        name: "Emilia",
        surname: "Pizarro",
        phone: 932794377,
        registrationDate: new Date()
    },
    {
        nit: 5558467,
        name: "Gloria",
        surname: "Montañez",
        phon:907432070,
        registrationDate: new Date()
    },
    {
        nit: 3451967,
        name: "Nicolás",
        surname: "Luna",
        phon:940818235,
        registrationDate: new Date()
    },
    {
        nit: 2150460,
        name: "Soledad",
        surname: "Barrios",
        phone: 939659629,
        registrationDate: new Date()
    },
])

// DATA UPDATE
db.customers.update(
    {name:"Emilia"},
    {
        $set:{
            surname: "Venezuela"
        }
    },
    {upsert: false}
)
db.customers.update(
    {name:"Javier"},
    {
        $set:{
            surname: "Rodriguez"
        }
    },
    {upsert: false}
)
db.customers.update(
    {name:"Javier"},
    {
        $set:{
            surname: "Rodriguez"
        }
    },
    {upsert: true}
)
db.customers.update(
    {name:"Felipe"},
    {
        $set:{
            surname: "Rodriguez"
        }
    }
)

// DELETE DATA
db.customers.deleteOne(
    {name:"Javier"}
)
// eliminar todos los que empiecen con E
db.customers.deleteMany(
    {name:{$in:[/^E/]}}
)
