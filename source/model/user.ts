import { ObjectId } from "mongodb";
import Transactions from "./transactions";

export default class User {
    constructor(
        public username: string,
        public password: string,
        public gender: string,
        public age: number,
        public country: string,
        public transactions: Transactions[],
        public id?: ObjectId) {}
}

