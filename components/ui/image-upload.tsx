

"use client"

import { useEffect, useState } from "react";

import { CldUploadButton} from "next-cloudinary"
import Image from "next/image";

interface ImageUploadProps{
    value:string;
    onChange: (src:string)=>void;
    disabled?: boolean;
}

//this component use cloudinary: 
export const ImageUpload =({
    value,
    onChange,
    disabled
}: ImageUploadProps)=>{
    //to handle hydration error
    //enablig a  set state
    const [isMounted, setIsMounted] = useState(false);


    //only true only the service rendering is done and het to client side of rendering
    useEffect(()=>{
        setIsMounted(true);
    },[])

    if(!isMounted){
        return null;
    } 


    //client side
    return(
        <div className="spce-y-4 w-full flex flex-col justify-center items-center">
            <CldUploadButton
            //add functionality to the upload button
            onUpload={(result: any) => onChange(result.info.secure_url)}
            options={{
                maxFiles:1
            }}
            uploadPreset = "bzmj8ym9"
            >
                <div className="
                p-4
                border-4
                border-dashed
                border-primary/10
                rounded-lg
                hover:opacity-75
                transition
                flex
                flex-col
                space-y-2
                items-center
                justify-center
                ">
                    <div className="relative h-40 w-40">
                        <Image
                        fill
                        alt = "Upload"
                        src = {value || "/placeholder.svg"} //need to add this in public folder  //add dynamic option here
                        className= "rounded-lg object-cover"
                        />
                    </div>
                </div>
            </CldUploadButton>
        </div>
    )

}