import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";

export const getUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = await getRepository(User).find();
  return res.json(users);
};

export const getUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(User).findOne(req.params.id);
  if(!results) {
    return res.status(401).json("error id incorrecto")

  }
  return res.json(results);
};
export const loginUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user = await getRepository(User).findOne(req.params.id);
  if (user) {
    if(user.password === req.body.password && user.name===req.body.name) {
      return res.status(200).json('logging Completado')

    }
  }
  return res.status(404).json("error usuario o name incorrecto");
};
export const createUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newUser = await getRepository(User).create(req.body);
  const results = await getRepository(User).save(newUser);
  return res.json(results);
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user = await getRepository(User).findOne(req.params.id);
  if (user) {
    getRepository(User).merge(user, req.body);
    const results = await getRepository(User).save(user);
    return res.json(results);
  }

  return res.json('Usuario no encontrado'); 
};

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
  const results = await getRepository(User).delete(req.params.id);
  return res.json(results);
};
