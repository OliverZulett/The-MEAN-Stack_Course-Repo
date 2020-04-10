// list users
db.customers.find();

// list products
db.products.find({},{preparation_time:0});

// buscar productoc
db.products.find({name: {$regex: 'red', '$options' : 'i'}})

// product
db.products.find({_id: "58150"})

// orders
db.orders.find().sort( {delivery_date: 1} );

// order
db.orders.aggregate([
    { $match: { _id: "23834"} },
    {
        $lookup:
        {
            from: "customers",
            localField: "customer",
            foreignField: "_id",
            as: "cliente"
        }
    },
    { $unwind: "$cliente" },
    {
        $project: {
            __v: 0,
            "cliente.__v": 0,
            "cliente._id": 0
        }
    },
    {
        $lookup:
        {
            from: "products",
            localField: "products.product",
            foreignField: "_id",
            as: "productos"
        }
    }
    
])