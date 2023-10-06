const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main(){
    try {
        //insert category in database
        await db.category.createMany(
            {
                data:[
                    {name: "Famous People"},
                    {name: "Movie & TV"},
                    {name: "Musicians"},
                    {name: "Games"},
                    {name: "Animals"},
                    {name: "Philosophy"},
                    {name: "Scientists"},
                ]
            }
        )
        
    }catch(error){
        console.error("Error seeding default categories", error);

    }finally{
        await db.$disconnect();
    }

}


//run the script
main();

//npx prisma studio : look data in mysql
//node scripts/seed.ts :run in another terminal