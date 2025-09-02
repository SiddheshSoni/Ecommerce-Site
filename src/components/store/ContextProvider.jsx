import React, { useState } from "react";
import ItemContext from "./ItemContext";

const ContextProvider=(props)=>{
    const [items, setItems] = useState([]);

    const addItem=(item)=>{
        setItems((prev)=>{
            const index = prev.findIndex((prevItem)=> item.title === prevItem.title);
            if(index !== -1){
                const temp=[...prev];
                temp[index]={...temp[index], quantity:Number(temp[index].quantity)+Number(1)};
                return temp;
            }else{
                return([...prev, {...item, quantity:1, id: new Date().getTime().toString()}])
            }
            
        });
    };

    const removeItem=(id)=>{
        setItems((prev)=>{

            const index = prev.findIndex((elem) => id === elem.id); // findIndex returns -1 if dosen't exist
           
            if(index=== -1){
                return;
            }
            const currList = [...prev];

            if(currList[index].quantity === 1){
                return prev.filter(item => item.id !== id)
            }else{
                currList[index] ={...currList[index], quantity:Number(currList[index].quantity)-Number(1)};
                return currList;
            }
            
        })
    };

    const initialItems={
        items:items,
        addItem:addItem,
        removeItem:removeItem,
    }
    
    return(
        <ItemContext.Provider value={initialItems}>
            {/* {console.log(items)} */}
            {props.children}
        </ItemContext.Provider>
    )
}

export default ContextProvider;