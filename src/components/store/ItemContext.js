import React from "react"

const ItemContext= React.createContext(
    {
        items:[],
        addItem:(item)=>{},
        removeItem:(id)=>{}
    }
);

export default ItemContext;