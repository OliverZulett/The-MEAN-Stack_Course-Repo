conn = new Mongo();
db = conn.getDB('candyStore');
db.products.insert({
    name: "bonobon",
    price: 3.45,
});

