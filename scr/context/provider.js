import React, { createContext, useContext, useEffect, useState } from "react";

export const Context = createContext();

export default function Provider({ children }) {
    const [logAdm,setLogAdm] = useState('')
    const [nomeUser, setNomeUser] = useState();
    const [emailUser,setEmailUser] = useState();
    const [numeroUser,setNumeroUser] = useState();
    const [imagemUser,setImagemUser] = useState();
    const[nascUser,setNascUser] = useState();
    const[idUser,setIdUser] = useState();
    const[nomeAdm,setNomeAdm] = useState()
    const[emailAdm,setEmailAdm] = useState()
    const [data,setData] = useState()
    const [formData, setFormData] = useState({
        category: null,
        item: null,
        images: [],
       
    });


    return (
        <Context.Provider value={{ nomeUser, setNomeUser,emailUser,setEmailUser,numeroUser,setNumeroUser,imagemUser,setImagemUser,idUser,setIdUser,formData,setFormData,setNascUser,nascUser,setLogAdm,logAdm,setNomeAdm,nomeAdm,setEmailAdm,emailAdm,data,setData}}>
            {children}
        </Context.Provider>
    );
}
