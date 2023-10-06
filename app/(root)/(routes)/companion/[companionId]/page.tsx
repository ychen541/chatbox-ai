
//[companionId] which is where this file located 
//it is a dynamic part of url for proper ID

import prismadb from "@/lib/prismadb"
import { CompanionForm } from "./components/companion-form"

interface CompanionIdPageProps{
    params:{
        companionId:string  //companionId should match the folder name exactly

    }
}

const CompanionIdPage = async({
    params
}:CompanionIdPageProps) =>{
    //TODO: check subscription

    //attemp to fetch a companion to use its id
    const companion = await prismadb.companion.findUnique({
        where:{
            id: params.companionId,
        }
    })

    const categories = await prismadb.category.findMany();

    return (
       <CompanionForm
          initialData= {companion}
          categories = {categories}
        />

    )
}


export default CompanionIdPage;