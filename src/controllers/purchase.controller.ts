import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Product } from '../entity/Product';
import { User } from '../entity/User';

export const purchases = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const user = await getRepository(User).findOne(req.body.userId);
    const product = await getRepository(Product).findOne(req.body.productId);
    if (!user){
        return res.status(404).json('Message: Usuario no encontrado'); 
    }
    if (!product){
        return res.status(404).json('Message: Error Product no encontrado')
    }
    if(product.quantity-req.body.quantity<=0){
        return res.status(400).json('Message : no hay cantidad sufienciente')
    }
    if(user.money-product.price>=0){
        user.money=user.money-product.price;
        product.quantity=product.quantity-req.body.quantity
        const results = await getRepository(Product).save(product);
        const results1 = await getRepository(User).save(user);
        return res.status(200).json('Message: Compra Completa');

    }
    return res.status(400).json('Usuario sin dinero')
    
  };