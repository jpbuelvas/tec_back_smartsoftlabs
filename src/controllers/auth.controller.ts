const jwt = require('jwt');
const bcrypt = require('bcrypt');
const conex = require('conex');
const promisify = require('util');
import { Request, Response } from "express";

export const register = async (req:Request, res:Response)=>{
    return res.json(res);
}