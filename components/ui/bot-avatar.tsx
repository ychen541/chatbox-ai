import { Avatar, AvatarImage } from "@/components/ui/avatar";


interface BotAvaterProps {
    src:string;
}
export const BotAvater =({
   src
}:BotAvaterProps)=>{
    return (
        <div>
            <Avatar className ="h-12 w-12">
                <AvatarImage src ={src}/>
            </Avatar>
        </div>
    )
}