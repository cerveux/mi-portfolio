import { useState } from "react";

export function useLanguage(initialValue = true){
    const [activeLanguage, setactiveLanguage] = useState(initialValue);

    const switchLanguage = ()=>{activeLanguage? setactiveLanguage(!activeLanguage): setactiveLanguage(!activeLanguage)};

    

    return[activeLanguage, switchLanguage]
}