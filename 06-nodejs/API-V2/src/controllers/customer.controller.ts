import { Router, Request, Response } from "express";
import Customer from "../models/customer.model";
import { statusResponse } from "../functions/statusResponse.function";
import { createToken } from "../functions/createTokens.function";


export const customersList = async (req: Request, res: Response) => {
  const customer = await Customer.find({}, "_id name surname", (err, customers) => {
    if (err) {
      return statusResponse(res, 500, 'error al buscar clientes', err);
    }
    statusResponse(res, 200, "Lista de clientes", null, { customers: customers });
  }
  );
};

export const getCustomerById = async (req: Request, res: Response) => {
  const id = req.params.id;
  await Customer.findById(id, (err, customer) => {
    if (err) {
      return statusResponse(res, 500, `Cliente con el id: ${id} no encontrado`, err);
    }
    statusResponse(res, 200, '', null, { customer: customer });
  });
}

export const createCustomer = async (req: Request, res: Response) => {
  const dataRecibida: Object = req.body;
  if (!dataRecibida || Object.keys(req.body).length === 0) {
    return statusResponse(res, 400, 'error al recibir los datos', null);
  }

  const customer = await Customer.findOne({ email: req.body.email }) || await Customer.findOne({ nit: req.body.nit }).catch((err) => console.log('error en el nit'));
  if (customer) {
    return statusResponse(res, 400, 'El cliente ya exite', null);
  }

  const newCustomer = new Customer(req.body);
  await newCustomer.save((err, newCustomer) => {
    if (err) {
      return statusResponse(res, 500, 'error al guardar cliente', err);
    }
    statusResponse(res, 201, 'cliente guardado', null, { new_customer: newCustomer });
  });
};

export const updateCustomer = async (req: Request, res: Response) => {
  const id = req.params.id;
  console.log(req.body);

  if (!req.body || Object.keys(req.body).length === 0) {
    return statusResponse(res, 400, 'error al recibir los datos', null);
  }
  await Customer.findById(id, (err, customerForUpdate: any) => {
    if (err) {
      return statusResponse(res, 500, `no se encontro el cliente con el id: ${id}`, err);
    }
    Customer.findByIdAndUpdate(id, { ...customerForUpdate._doc, ...req.body }, (err, customerUpdated) => {
      if (err) {
        return statusResponse(res, 500, `error al actualizar cliente`, err);
      }
      statusResponse(res, 200, 'cliente actualizado', null, { updated_customer: { ...customerForUpdate._doc, ...req.body } });
    });
  })
}

export const deleteCustomerById = async (req: Request, res: Response) => {
  const id = req.params.id;
  await Customer.findByIdAndDelete(id, (err, customer) => {
    if (err) {
      return statusResponse(res, 500, `Cliente con el id: ${id} no encontrado`, err);
    }
    statusResponse(res, 200, 'Cliente eliminado con exito', null, { customer: customer });
  });
}

