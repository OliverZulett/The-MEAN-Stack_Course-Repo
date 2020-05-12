import { Request, Response } from "express";
import User from "../models/user.model";
import { statusResponse } from "../functions/statusResponse.function";
import { createToken } from "../functions/createTokens.function";
import Auth from '../functions/verifyAuthorization.function';


export const usersList = async (req: Request, res: Response) => {
  const user = await User.find({}, "_id name surname", (err, users) => {
    if (err) {
      return statusResponse(res, 500, 'error al buscar usuarios', err);
    }
    statusResponse(res, 200, "Lista de usuarios", null, { users: users });
  }
  );
};

export const getUserById = async (req: Request, res: Response) => {
  const id = req.params.id;
  
  if (!Auth(req.user, res, id)) {
    return statusResponse(res, 401, `Usuario no autorizado para realizar la peticion`, null);
  }
  
  await User.findById(id, (err, user) => {
    if (err) {
      return statusResponse(res, 500, `Usuario con el id: ${id} no encontrado`, err);
    }
    statusResponse(res, 200, '', null, { user: user });
  });
}

export const createUser = async (req: Request, res: Response) => {
  const dataRecibida: Object = req.body;
  if (!dataRecibida || Object.keys(req.body).length === 0) {
    return statusResponse(res, 400, 'error al recibir los datos', null);
  }

  const user = await User.findOne({ email: req.body.email }) || await User.findOne({ nit: req.body.nit }).catch((err) => console.log('error en el nit'));
  if (user) {
    return statusResponse(res, 400, 'El usuario ya exite', null);
  }

  const newUser = new User(req.body);
  await newUser.save((err, newUser) => {
    if (err) {
      return statusResponse(res, 500, 'error al guardar usuario', err);
    }
    statusResponse(res, 201, 'usuario guardado', null, { new_user: newUser, token: createToken(newUser) });
  });
};

export const updateUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  console.log(req.body);
    
  if (!Auth(req.user, res, id)) {
    return statusResponse(res, 401, `Usuario no autorizado para realizar la peticion`, null);
  }

  if (!req.body || Object.keys(req.body).length === 0) {
    return statusResponse(res, 400, 'error al recibir los datos', null);
  }
  await User.findById(id, (err, userForUpdate: any) => {
    if (err) {
      return statusResponse(res, 500, `no se encontro el usuario con el id: ${id}`, err);
    }
    User.findByIdAndUpdate(id, { ...userForUpdate._doc, ...req.body }, (err, userUpdated) => {
      if (err) {
        return statusResponse(res, 500, `error al actualizar usuario`, err);
      }
      statusResponse(res, 200, 'usuario actualizado', null, { updated_user: { ...userForUpdate._doc, ...req.body } });
    });
  })
}

export const deleteUserById = async (req: Request, res: Response) => {
  const id = req.params.id;
    
  if (!Auth(req.user, res, id)) {
    return statusResponse(res, 401, `Usuario no autorizado para realizar la peticion`, null);
  }
  await User.findByIdAndDelete(id, (err, user) => {
    if (err) {
      return statusResponse(res, 500, `Usuario con el id: ${id} no encontrado`, err);
    }
    statusResponse(res, 200, 'Usuario eliminado con exito', null, { user: user });
  });
}

