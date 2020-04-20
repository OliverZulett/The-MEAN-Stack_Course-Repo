const express = require("express");
const mongoose = require("mongoose");

// SERVER
const app = express();
// configuraciones
app.use(express.urlencoded());
app.use(express.json());

// MONGO
// mongoose.connect('mongodb://localhost:27018/test', {useNewUrlParser: true, useUnifiedTopology: true});
// const Cat = mongoose.model('Cat', { name: String });
// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));
mongoose.connection.openUri(
  "mongodb://localhost:27018/culturaCupcake",
  (err, res) => {
    if (err) {
      throw err;
    }
    console.log("Mongo server run on port 27018");
  }
);

var Customer = mongoose.Schema;
const customerSchema = new Customer(
  {
    name: {
      type: String,
      required: [true, "El nombre es necesario"],
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
    collection: "customers",
  }
);
customerModel = mongoose.model("Customer", customerSchema);

// enviar datos
app.get("/", function (req, res) {
  res.status(200).json({
    ok: true,
    message: "peticion realizada exitosamente",
  });
});

// lista de clientes
app.get("/customers", function (req, res) {
  customerModel.find({}, "_id name surname", (err, customers) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        message: "error al encontrar clientes",
        errors: err,
      });
    }
    res.status(200).json({
      ok: true,
      customers: customers,
    });
  });
});

// obtener un cliente
app.get("/customers/:id", function (req, res) {
  const id = req.params.id;
  customerModel.findById(id, (err, customer) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        message: "error al encontrar clientes",
        errors: err,
      });
    }
    res.status(200).json({
      ok: true,
      customer: customer,
    });
  });
});

// crear cliente
app.post("/customers", (req, res) => {
  const dataRecibida = req.body;
  if (!dataRecibida) {
    res.status(404).json({
      ok: false,
      message: "error al recibir los datos",
    });
  }
  const customer = new customerModel({
    name: dataRecibida.name,
    surname: dataRecibida.surname,
    email: dataRecibida.email,
    phone: dataRecibida.phone,
    phone: dataRecibida.phone,
    adress: dataRecibida.adress,
    nit: dataRecibida.nit,
    password: dataRecibida.password,
  });
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
      message: "Cliente guardado",
      newCustomer: newCustomer,
    });
  });
});

// actualizar cliente
app.put("/customers/:id", (req, res) => {
  const id = req.params.id;
  const dataRecibida = req.body;
  console.log(dataRecibida);

  if (!dataRecibida || !id) {
    res.status(404).json({
      ok: false,
      message: "error al recibir los datos o el id",
    });
  }
  customerModel.findById(id, (err, customer) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        message: "error al buscar usuario",
        errors: err,
      });
    }
    if (!Customer) {
      return res.status(400).json({
        ok: false,
        message: "cliente no encontrado",
        errors: err,
      });
    }

    customer.name = dataRecibida.name ? dataRecibida.name : customer.name;
    customer.surname = dataRecibida.surname
      ? dataRecibida.surname
      : customer.surname;
    customer.email = dataRecibida.email ? dataRecibida.email : customer.email;
    customer.phone = dataRecibida.phone ? dataRecibida.phone : customer.phone;
    customer.phone = dataRecibida.phone ? dataRecibida.phone : customer.phone;
    customer.adress = dataRecibida.adress
      ? dataRecibida.adress
      : customer.adress;
    customer.nit = dataRecibida.nit ? dataRecibida.nit : customer.nit;
    customer.password = dataRecibida.password
      ? dataRecibida.password
      : customer.password;

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
        message: "Cliente guardado",
        newCustomer: newCustomer,
      });
    });
  });
});

// Eliminar cliente
app.delete("/customers/:id", (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(404).json({
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
      return res.status(500).json({
        ok: false,
        message: `no existe un usuario con el id: ${id}`,
        errors: err,
      });
    }
    res.status(200).json({
      ok: true,
      message: `usuario eliminado con exito`,
      user: userErased,
    });
  });
});

app.listen(3000, () => {
  console.log("server run on port 3000");
});
