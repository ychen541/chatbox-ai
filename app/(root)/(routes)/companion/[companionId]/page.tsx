
//[companionId] which is where this file located 
//it is a dynamic part of url for proper ID

import prismadb from "@/lib/prismadb"
import { CompanionForm } from "./components/companion-form"
import { auth, redirectToSignIn } from "@clerk/nextjs"

interface CompanionIdPageProps{
    params:{
        companionId:string  //companionId should match the folder name exactly

    }
}

const CompanionIdPage = async({
    params
}:CompanionIdPageProps) =>{
    //TODO: check subscription


    //make sure not everyone can edit meaning when switch to another account, the link of edit from one will not be accessable
    const {userId} = auth();


    if(!userId){
        return redirectToSignIn();
    }

    //attemp to fetch a companion to use its id
    const companion = await prismadb.companion.findUnique({
        where:{
            id: params.companionId,
            userId
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