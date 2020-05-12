/////////////////////////////////////////////////////////
// CONFIGURACIONES
/////////////////////////////////////////////////////////

//---> Express
const express = require("express"); //---> llamamos al modulo de express
const app = express(); //---> instanciamos el objeto principal "app" de nuest5ra API
app.use(express.urlencoded({ extended: true })); //---> analiza las peticiones https://expressjs.com/es/api.html#express.urlencoded
app.use(express.json()); //---> middleware que solo analiza json  https://expressjs.com/es/api.html#express.json
// especificamos constantes de conexion en el servidor
const PORT = 3000
app.listen(PORT, () => { //---> Vincula y escucha las conexiones en el host y el puerto especificados. Este método es idéntico al http.Server.listen () de Node.
  console.log(`server run on port: ${PORT}`);
});

//---> MongoDB
const mongoose = require("mongoose");//---> llamamos al modulo de mongoose para administrar mongodb

// especificamos constantes de conexion a la DB:
const DB = 'culturaCupcake';
const DB_PORT = 27018;

mongoose.connection.openUri( //---> especificamos los parametros de conexion a la DB
  `mongodb://localhost:${DB_PORT}/${DB}`, //---> url de nuestra DB
  {useNewUrlParser: true, useUnifiedTopology: true}, //---> configuraciones de mongoose
  (err, res) => { 
    if (err) { //---> si hubo algun error al conectarse a la url de la DB termina la ajecucion y devulve un error
      return res.status(500).json({
        ok: false,
        message: "error al conectarse a la base de datos",
        errors: err,
      });
    }
    console.log(`Mongo server run on port: ${DB_PORT}`);
  }
);

var Customer = mongoose.Schema; //---> instanciamos un Schema de mongo 
const customerSchema = new Customer( //---> creamos la "interfaz" a partir del esquema de datos con el cual trabajaremos
  {
    name: { //---> a cada campo con el que trabajaremos se le pueden asignar reglas
      type: String, //---> aqui decimos que sera un String
      required: [true, "El nombre es necesario"], //---> aqui especificamos que el campo es requerido de lo contrario el POST se rechaza
    },
    surname: {
      type: String,
      required: [true, "El apellido es necesario"],
    },
    email: {
      type: String,
      required: [true, "El email es necesario"],
    },
    password: {
      type: String,
      required: [true, "La contraseña es necesaria"],
    },
    nit: {
      type: String,
      required: [true, "El nit o ci es necesario"],
    },
    adress: {
      type: String,
      required: [true, "La direccion es necesaria"],
    },
    phone: {
      type: String,
      required: [true, "El numero de telefono es necesario"],
    },
  },
  {
    collection: "customers", //---> indicamos la coleccion con la que trabajaremos
  }
);
customerModel = mongoose.model("Customer", customerSchema); //---> creamos nuestro modelos de datos a partir de la "interfaz" y el schema de mongo



/////////////////////////////////////////////////////////
// PETICIONES
/////////////////////////////////////////////////////////
//---> Peticiones GET
app.get("/", function (req, res) { //---> Peticion de prueba
  res.status(200).json({
    ok: true,
    message: "peticion realizada exitosamente",
  });
});

app.get("/customers", function (req, res) { //---> lista de clientes
  customerModel.find(
    {}, //---> filtro de la consulta ex: { name: "ricardo"}
    "_id name surname", //---> limitamos los parametros a recibir
    (err, customers) => { //---> callback
      if (err) { //---> respuesta si la consulta no se ejecuto bien
        return res.status(500).json({
          ok: false,
          message: "error al buscar clientes",
          errors: err
        });
      }
      res.status(200).json({
        ok: true,
        customers: customers
      });
  });
});

app.get("/customers/:id", function (req, res) { //---> buscamos un cliente por su _id
  const id = req.params.id; //---> obtenemos el _id desde la url
  if (!id) {
    res.status(400).json({
      ok: false,
      message: "error al recibir el id",
    });
  }
  customerModel.findById(id, (err, customer) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        message: "error al buscar el clinete",
        errors: err,
      });
    }
    if (!customer) {
      return res.status(204).json({
        ok: true,
        message: "No se encontro el cliente"
      });
    }
    res.status(200).json({
      ok: true,
      customer: customer,
    });
  });
});

//---> Peticiones POST
app.post("/customers", (req, res) => {
  const dataRecibida = req.body; //---> obtenemos los datos enviados por el clinte desde su peticion
  if (!dataRecibida) {
    res.status(400).json({
      ok: false,
      message: "error al recibir los datos",
    });
  }
  const customer = new customerModel({ //---> Creamos un modelo de datos con los datos recibidos en la peticion
    name: dataRecibida.name,
    surname: dataRecibida.surname,
    email: dataRecibida.email,
    phone: dataRecibida.phone,
    adress: dataRecibida.adress,
    nit: dataRecibida.nit,
    password: dataRecibida.password,
  });
  customer.save((err, newCustomer) => { //---> guardamos el modelo
    if (err) {
      return res.status(500).json({
        ok: false,
        message: "error al guardar cliente",
        errors: err,
      });
    }
    res.status(201).json({
      ok: true,
      message: "Cliente guardado",
      newCustomer: newCustomer,
    });
  });
});

//---> Peticiones PUT
app.put("/customers/:id", (req, res) => { //---> peticion para actualizar un usuario por su _id

  const id = req.params.id;
  const dataRecibida = req.body;

  if (!dataRecibida || !id) {
    res.status(400).json({
      ok: false,
      message: "error al recibir los datos o el id",
    });
  }
  customerModel.findById(id, (err, customer) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        message: "error al buscar cliente",
        errors: err,
      });
    }
    if (!Customer) {
      return res.status(204).json({
        ok: false,
        message: "cliente no encontrado",
        errors: err,
      });
    }

    // findbyid nos devuelve un cliente con el esquema que especificamos en la configuracion de mongo
    // por lo que no es necesario crear un nuevo modelo simplemente actualizamos los datos 
    customer.name = dataRecibida.name ? dataRecibida.name : customer.name;
    customer.surname = dataRecibida.surname ? dataRecibida.surname : customer.surname;
    customer.email = dataRecibida.email ? dataRecibida.email : customer.email;
    customer.phone = dataRecibida.phone ? dataRecibida.phone : customer.phone;
    customer.phone = dataRecibida.phone ? dataRecibida.phone : customer.phone;
    customer.adress = dataRecibida.adress ? dataRecibida.adress : customer.adress;
    customer.nit = dataRecibida.nit ? dataRecibida.nit : customer.nit;
    customer.password = dataRecibida.password ? dataRecibida.password : customer.password;

    customer.save((err, newCustomer) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          message: "error al guardar cliente",
          errors: err,
        });
      }
      res.status(201).json({
        ok: true,
        message: "Cliente actualizado",
        newCustomer: newCustomer,
      });
    });
  });
});

//---> Peticiones DELETE
app.delete("/customers/:id", (req, res) => { //---> peticion para eliminar cliente segun su _id
  const id = req.params.id;
  if (!id) {
    res.status(400).json({
      ok: false,
      message: "error al recibir el id",
    });
  }
  customerModel.findByIdAndDelete(id, (err, userErased) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        message: "error al eliminar cliente",
        errors: err,
      });
    }
    if (!userErased) {
      return res.status(204).json({
        ok: false,
        message: `no existe un cliente con el id: ${id}`,
        errors: err,
      });
    }
    res.status(200).json({
      ok: true,
      message: `cliente eliminado con exito`,
      user: userErased,
    });
  });
});
