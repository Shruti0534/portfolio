
'use server'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
 export const toIncreaseCount= async(previouscount)=>{
    try {
        const mcount=await prisma.visitor.update({
            where:{
                id:'6623952838021d8883e99c70'
               },
               data:{
                count:previouscount
               }

        })
        return {
            totalcount:mcount
        }
    } catch (error) {
        return {
            error:`something went wrong ${error}`
        }
    }
}

export const fetchVisitor=async()=>{
    try {
       const totalvisitor= await prisma.visitor.findUnique({
       where:{
        id:'6623952838021d8883e99c70'
       }
       })
       return{
        totalvisitor:totalvisitor
       }

    } catch (error) {
        
    }
}