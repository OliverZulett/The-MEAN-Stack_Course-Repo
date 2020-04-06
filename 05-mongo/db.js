// conn = new Mongo()
// db = conn.getDB("candyStore");

// DATA INSERT
db.customers.insertOne({
  nit: 5528012,
  name: "Agustín",
  surname: "Ruiz",
  phone: 971008360,
  registrationDate: new Date(),
});
db.customers.insertMany([
  {
    nit: 1225629,
    name: "Emilia",
    surname: "Valenzuela",
    phone: 924558022,
    registrationDate: new Date(),
  },
  {
    nit: 4293022,
    name: "Teresa",
    surname: "Covarrubias",
    phone: 907184000,
    registrationDate: new Date(),
  },
  {
    nit: 1293518,
    name: "Julia",
    surname: "Gutiérrez",
    phone: 963754778,
    registrationDate: new Date(),
  },
  {
    nit: 3293967,
    name: "Ana Luisa",
    surname: "Peralta",
    phone: 946001344,
    registrationDate: new Date(),
  },
]);
db.customers.insert({
  nit: 2603476,
  name: "María del Carmen",
  surname: "Ureña",
  phone: 939679687,
  registrationDate: new Date(),
});
db.customers.insert([
  {
    nit: 4153766,
    name: "Emilia",
    surname: "Pizarro",
    phone: 932794377,
    registrationDate: new Date(),
  },
  {
    nit: 5558467,
    name: "Gloria",
    surname: "Montañez",
    phon: 907432070,
    registrationDate: new Date(),
  },
  {
    nit: 3451967,
    name: "Nicolás",
    surname: "Luna",
    phon: 940818235,
    registrationDate: new Date(),
  },
  {
    nit: 2150460,
    name: "Soledad",
    surname: "Barrios",
    phone: 939659629,
    registrationDate: new Date(),
  },
]);

// DATA UPDATE
db.customers.update(
  { name: "Emilia" },
  {
    $set: {
      surname: "Venezuela",
    },
  },
  { upsert: false }
);
db.customers.update(
  { name: "Javier" },
  {
    $set: {
      surname: "Rodriguez",
    },
  },
  { upsert: false }
);
db.customers.update(
  { name: "Javier" },
  {
    $set: {
      surname: "Rodriguez",
    },
  },
  { upsert: true }
);
db.customers.update(
  { name: "Felipe" },
  {
    $set: {
      surname: "Rodriguez",
    },
  }
);

// DELETE DATA
db.customers.deleteOne({ name: "Javier" });
// eliminar todos los que empiecen con E
db.customers.deleteMany({ name: { $in: [/^E/] } });

// SIMPLE QUERIES
db.customers.find();
// filters
db.customers.find({ name: { $regex: /^A/ } });
db.customers.find({ name: { $regex: /a$/ } });
db.customers.find({ nit: 5528012 });
db.customers.find({
  $where: () => this.nit % 10 == 1,
});
db.customers.find({
  $where: function () {
    return this.nit % 10 === 2 || this.nit % 10 === 7;
  },
});

db.customers.find({ nit: { $mod: [10, 1] } });
db.customers.find({ nit: { $mod: [10, 7] } });
// projection
db.customers.find(
  {
    $where: function () {
      return this.nit % 10 === 2 || this.nit % 10 === 7;
    }
  },
  {
    phone: 0,
    registrationDate: 0
  }
);
// modifiers
db.customers.find(
  {
    $where: function () {
      return this.nit % 10 === 2 || this.nit % 10 === 7;
    }
  },
  {
    phone: 0,
    registrationDate: 0
  }
).sort({name:1}).limit(3);


// ADVANCE QUERY
// Simple Agregation
db.customers.count();
db.customers.count(
  {
    $where: function () {
      return this.nit % 10 === 2 || this.nit % 10 === 7;
    }
  }
);
// distinct
db.customers.distinct("registrationDate");

// Pipeline aggregation
db.customers.aggregate(
  [
    { $match: { name: { $regex: /a$/ }}},
    { $count: "total_clientes"}
  ]
)
db.customers.aggregate(
  [
    { $match: {}},
    { $count: "total_clientes"}
  ]
)
