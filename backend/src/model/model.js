import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class ModelLocation {
    constructor(body){
        this.body = body;
    };

    async getLocation(){
        const {latitude, longitude} = this.body;
        const save = await prisma.location.create({data: {latitude, longitude}});
        return save;
    };
};