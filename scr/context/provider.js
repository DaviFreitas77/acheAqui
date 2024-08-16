import React, { createContext, useContext, useEffect, useState } from "react";

export const Context = createContext();

export default function Provider({ children }) {
    const [nomeUser, setNomeUser] = useState();
    const [emailUser,setEmailUser] = useState();
    const [numeroUser,setNumeroUser] = useState();
    const [imagemUser,setImagemUser] = useState();
    const[idUser,setIdUser] = useState();
    const [formData, setFormData] = useState({
        category: null,
        item: null,
        images: []
    });

    useEffect(() => {
       
        async function fetchNomeUser() {
           
                let response = await fetch('http://192.168.1.67/services/userdata.php', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                });
                const result = await response.json();
                if (response.ok) {
                    if (result.success === false) {
                        alert('Falha ao buscar dados do usuário');
                    } else {
                        setNomeUser(result.nome); 
                        setEmailUser(result.email)
                        setNumeroUser(result.numeroCelular)
                        setImagemUser(result.imagem)
                        setIdUser(result.id)
                    }
                } else {
                    alert('Erro ao buscar dados do usuário');
                }
           
        }
        fetchNomeUser();
    }, []); 

    return (
        <Context.Provider value={{ nomeUser, setNomeUser,emailUser,setEmailUser,numeroUser,setNumeroUser,imagemUser,setImagemUser,idUser,setIdUser,formData,setFormData}}>
            {children}
        </Context.Provider>
    );
}
