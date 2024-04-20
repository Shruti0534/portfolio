'use server'

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

 export const toStoreData = async (data)=>{
   try {
        await prisma.contact.create({
            data:{
                ...data
            }
        })
    return {
        status:true
    }
   } catch (error) {
    return {
        status: false
    }
   }
}