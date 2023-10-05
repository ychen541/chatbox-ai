

"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useRouter, useSearchParams } from "next/navigation"
import { ChangeEventHandler,useEffect,useState} from "react"
import { useDebounce } from "@/hooks/use-debounce"
import qs from "query-string"

export const SearchInput = () =>{
    //make search bar function
    const router = useRouter();
    const searchParams = useSearchParams();

    //also be able to search by catoglory
    const catergoryId = searchParams.get("categoryId"); //not going to control/assign
    const name = searchParams.get("name"); //will be controlled

    const [value, setValue]=useState(name || ""); 
    //not going to send request everytime we type, we wait until the typing is done and send the query
    //create hooks in the root of app
    //the actual value to query the database for what we search is going
    //to be trigger every 500 ms
    const debouncedValue = useDebounce<string>(value, 500);

    const onChange: ChangeEventHandler<HTMLInputElement> =(e) =>{
        setValue(e.target.value);
    }

    useEffect(()=>{
        const query = {
            name:debouncedValue,
            catergoryId: catergoryId,

        };
        const url = qs.stringifyUrl({
            url:window.location.href,
            query,
        },{skipEmptyString: true, skipNull: true}); //remove the empty string from the query

        router.push(url);

    },[debouncedValue,router,catergoryId]);


    return(
        <div className = " relative">
            <Search className="absolute h-4 w-4 top-3 left-4 text-muted-foreground"/>
            <Input 
                onChange={onChange}
                value={value}
                placeholder= "Search..."
                className = "pl-10 bg-primary/10"//search bar ui 
            />
        </div>

    )
}