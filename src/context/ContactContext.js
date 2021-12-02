//creo el contexto de productos
import { createContext } from "react";
import { apiContacto } from "./Api";

const ContactContext = createContext();

const ContacProvider = ({ children }) => {
  console.log("Hola Hola");
  //cero el metodo para crar prodcutos
  const handleCreate = async (objxxxxx) => {
    //capturo el token del user autenticado
    // let token = localStorage.getItem("token");
    let resp = await fetch(apiContacto, {
      method: "POST",
      headers: {
        "Contect-Type": "application/json",
        //Autorization: `Bearer ${token}`,
      },
      body: JSON.stringify(objxxxxx),
    });
    console.log("Hola Hola");
    return resp;
  };
  const data = { handleCreate };

  return (
    <ContactContext.Provider value={data}>{children}</ContactContext.Provider>
  );
};

export { ContacProvider };
export default ContactContext;
