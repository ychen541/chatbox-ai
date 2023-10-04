import { Navbar } from "@/components/Navbar";
import React from "react";

const RootLayout = ({
    children 
}:{
    //adds type for the proper children
    children: React.ReactNode;
}) => {
    return (
        //render children 
        <div className = "h-full">
            <Navbar/>
            <main className="md:pl-20 pt-16 h-full">
             {children}
            </main>
        </div>
    );

}

export default RootLayout;