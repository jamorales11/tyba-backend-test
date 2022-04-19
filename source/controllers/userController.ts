import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import { ObjectId} from "mongodb";
import { collections } from "../dbconfig/db";
import User from "../model/user";
import Transactions from '../model/transactions';

let loggedUserUsername : string = "";

const createUser = async(req: Request, res: Response, next: NextFunction) => {
    console.log("Starting to create User");

    try{
        const newUsuario = req.body as User;
        console.log(newUsuario);

        const query = { username: req.body.username };
        const resultSearch = (await collections.users?.findOne(query));
        if(!resultSearch){
            const result = await collections.users?.insertOne(newUsuario);
        
            result
            ? res.status(201).send(`Usuario creado exitosamente con el id ${result.insertedId}`)
            : res.status(500).send("El usuario no pudo ser creado");
        } else {
            res.status(500).send("Un usuario con ese username ya existe");

        }


        
    } catch (error:any){
        console.error(error);
        res.status(400).send(error.message);
    }
};



const login = async(req: Request, res: Response, next: NextFunction) => {
    console.log("Starting to login User");

    try{
        const query = { username: req.body.username };
        const result = (await collections.users?.findOne(query));
        if (result) {
            if(result.password == req.body.password){
                loggedUserUsername = req.body.username;
                res.status(200).send(result);
            } else {
                res.status(500).send("Usuario y/o contraseña incorrectos");
            }
        } else {
            res.status(500).send("Usuario y/o contraseña incorrectos");

        }
        console.log(result);
        
    } catch (error:any){
        console.error(error);
        res.status(400).send(error.message);
    }
};





const getNearbyRestaurants = async(req: Request, res: Response, next: NextFunction) => {
    console.log("Starting to look for restaurants");

    try {
        console.log(loggedUserUsername);

        if(loggedUserUsername != ""){
            let baseUrl="api.tomtom.com";
            let queryReq="restaurant%20food%20";
            let API_Key=process.env.API_KEY;
            let lat = req.body.lat;
            let lon = req.body.lon;

            let reqUrl = `https://${baseUrl}/search/2/poiSearch/${queryReq}.json?limit=15&lat=${lat}&lon=${lon}&view=Unified&relatedPois=off&key=${API_Key}`;

            let resultApi: AxiosResponse = await axios.get(reqUrl);

            let restaurantes : any[] = [];

            for(let resultado of resultApi.data.results ){
                restaurantes.push({nombre: resultado.poi.name,
                                    posicion : resultado.position,
                                    distancia: `${resultado.dist} metros`});
            }

            //Persistiendo la transacción
            let trans : Transactions = {
                lat: lat,
                lon: lon,
                results: restaurantes
            }

            const query = { username: loggedUserUsername };
            const updateQuery = {$addToSet :{ transactions: trans}};
            const result = await collections.users?.updateOne(query, updateQuery);


            if(result){
                res.status(200).send(restaurantes);
            } else {
                res.status(500).send("No se pudo buscar restaurantes");
    
            }

        }
        else{
            res.status(500).send("Se requiere iniciar sesión para poder buscar restaurantes");
        }


    } catch (error:any) {
        console.error(error);
        res.status(400).send(error.message);
    }

};



const getTransactionsHistory = async(req: Request, res: Response, next: NextFunction) => {
    console.log("Starting to check the history");

    try {
        console.log(loggedUserUsername);

        if(loggedUserUsername != ""){
            const query = { username: loggedUserUsername };
            const result = (await collections.users?.findOne(query));
            if (result){
                res.status(200).send(result.transactions);
            } else{
                res.status(500).send("Se requiere iniciar sesión para mostrar historial de transacciones");

            }
        } else {
            res.status(500).send("Se requiere iniciar sesión para mostrar historial de transacciones");
        }

    } catch (error:any) {
        console.error(error);
        res.status(400).send(error.message);
    }
};




const logout = async(req: Request, res: Response, next: NextFunction) => {
    console.log("Loging out");

    try {

        if(loggedUserUsername == ""){
            res.status(500).send("Se requiere iniciar sesión en primer lugar antes de poder cerrarla");
        } else {
            loggedUserUsername = "";
            res.status(200).send("Se hizo log out exitosamente");
        }
        
    } catch (error:any) {
        console.error(error);
        res.status(400).send(error.message);
    }


}


export default {createUser, login, getNearbyRestaurants, getTransactionsHistory, logout};