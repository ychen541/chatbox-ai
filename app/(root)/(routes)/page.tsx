
//we can find the @test(route) by adding /test to localhost
//EX: http://localhost:3000/test

import { UserButton } from "@clerk/nextjs";

/*
Route groups:
In the app directory, nested folders are normally mapped to URL
But you can mark a folder as a Route group to prevernt the folder from being
include in the route;s URL path
->which allows you to organinze your route segments and project 
file in a logic way
*/


/*
removed the orignal page.tsx in @app, now the only page we have is inside the root
so what we change 
when enter http://localhost:3000 -> we are showing whatever we have in page.tsx 
since it is in (root)-> a route group
instead 
we dont need to add /test to whatever folder that page is exsit 

*/

//userButton is a clerk api that creates profile for an accout
//https://clerk.com/docs/components/user/user-button
const RootPage = () =>{
    return (
        <div>
            <UserButton afterSignOutUrl="/"/> 

        </div> //only login user can see this page
    );
}
 

export default RootPage; 