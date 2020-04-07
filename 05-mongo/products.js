conn = new Mongo();
db = conn.getDB("candyStore");
db.products.insert([
    {name: "bonobon", price: 3},
    {name: "oreo", price: 5},
    {name: "grosso", price: 1},
    {name: "sublime", price: 6},
    {name: "club social", price: 2}
])
