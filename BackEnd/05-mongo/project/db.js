conn = new Mongo();
db = conn.getDB("culturaCupcake");
// db.createUser(
//     {
//         user: "seller",
//         pwd: "seller",
//         roles: [ { role: "readWrite", db: "culturaCupcake" } ]
//     }
// );
db.createUser(
    {
        user: "admin",
        pwd: "admin",
        roles: [ { role: "dbAdmin", db: "culturaCupcake" } ]
    }
);
db.customers.insert([
    { _id: "17460", name: "Gina", surname: "Greenholt", nit: "9350171" },
    { _id: "45187", name: "Judah", surname: "Runolfsson", nit: "7241765" },
    { _id: "73018", name: "Kristofer", surname: "Schmeler", nit: "9225022" },
    { _id: "70594", name: "Gabriella", surname: "Abernathy", nit: "7938509" },
    { _id: "12250", name: "Cesar", surname: "Green", nit: "9257462" },
    { _id: "24636", name: "Isaiah", surname: "Wisoky", nit: "5477545" },
    { _id: "82239", name: "Elenora", surname: "Rosenbaum", nit: "205013" },
    { _id: "4216", name: "Dax", surname: "Murphy", nit: "8124921" },
    { _id: "3370", name: "Ottis", surname: "Konopelski", nit: "865145" },
    { _id: "48404", name: "Alivia", surname: "Huels", nit: "4622103" },
    { _id: "87256", name: "Tito", surname: "Conn", nit: "887963" },
    { _id: "6646", name: "Dorthy", surname: "Mohr", nit: "2690305" },
    { _id: "68360", name: "Margarette", surname: "Rath", nit: "192745" },
    { _id: "37522", name: "Heidi", surname: "Borer", nit: "2753408" },
    { _id: "5593", name: "Amelie", surname: "Haag", nit: "9832976" },
    { _id: "42507", name: "Brionna", surname: "Weissnat", nit: "4397438" },
    { _id: "56646", name: "Blaise", surname: "Oberbrunner", nit: "2924728" },
    { _id: "65832", name: "Rachel", surname: "O'Conner", nit: "4434210" },
    { _id: "10774", name: "April", surname: "Ondricka", nit: "1611612" },
    { _id: "40424", name: "Obie", surname: "Hirthe", nit: "603046" }
]);
db.products.insert([
    { _id: "96057", name: "Cupcake Red Velvet", price: 7, preparation_time: 1, img: "http://lorempixel.com/640/480" },
    { _id: "58150", name: "Cupcake Tres Leches", price: 8, preparation_time: 1, img: "http://lorempixel.com/640/480" },
    { _id: "1128", name: "Cupcake Cholate", price: 5, preparation_time: 1, img: "http://lorempixel.com/640/480" },
    { _id: "65536", name: "Cupcake Vainilla", price: 5, preparation_time: 1, img: "http://lorempixel.com/640/480" },
    { _id: "46451", name: "Cupcake Frutas", price: 5, preparation_time: 1, img: "http://lorempixel.com/640/480" },
    { _id: "9568", name: "Cupcake Con Relleno", price: 8, preparation_time: 1, img: "http://lorempixel.com/640/480" },
    { _id: "96790", name: "Cupcake Yogurt", price: 6, preparation_time: 1, img: "http://lorempixel.com/640/480" },
    { _id: "2946", name: "Cupcake Pizza", price: 8, preparation_time: 1, img: "http://lorempixel.com/640/480" },
    { _id: "10918", name: "Cupcake Selva negra", price: 8, preparation_time: 1, img: "http://lorempixel.com/640/480" },
    { _id: "78236", name: "Cupcake Nutella", price: 7.5, preparation_time: 1, img: "http://lorempixel.com/640/480" },
    { _id: "59054", name: "Cupcake Vegano", price: 6.5, preparation_time: 1, img: "http://lorempixel.com/640/480" },
    { _id: "97265", name: "Cupcake Zanahoria", price: 8.5, preparation_time: 1, img: "http://lorempixel.com/640/480" }
]);
db.orders.insert( { _id: "91384", customer: "17460", products: [ { product: "96057", units: 6 }, { product: "58150", units: 7 } ], order_date: new Date(), delivery_date: new Date(ISODate().getTime() - 1000 * 86400 * 3), total_cost: 98, extra_detail: "Cupcake tres leches con leche deslactosada por favor :)"} );

db.orders.insert( { _id: "883", customer: "56646", products: [ { product: "10918", units: 6 } ], order_date: new Date(), delivery_date: new Date(ISODate().getTime() - 1000 * 86400 * 1), total_cost: 48, extra_detail: ""} );

db.orders.insert( { _id: "18403", customer: "65832", products: [ { product: "2946", units: 12 } ], order_date: new Date(), delivery_date: new Date(ISODate().getTime() - 1000 * 86400 * 1), total_cost: 96, extra_detail: "Las masas sin gluten, please :)"} );

db.orders.insert( { _id: "23834", customer: "10774", products: [ { product: "96057", units: 6 }, { product: "58150", units: 7 }, { product: "58150", units: 7 } ], order_date: new Date(), delivery_date: new Date(ISODate().getTime() - 1000 * 86400 * 2), total_cost: 134, extra_detail: ""} );