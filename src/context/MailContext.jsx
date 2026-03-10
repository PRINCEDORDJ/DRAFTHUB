import { useState, useEffect, createContext } from "react";

export const MailContext = createContext()

export const MailProvider = ({ children }) => {
    const [mails, setMails] = useState(() => {
        const savedMails = localStorage.getItem("mails")
        return savedMails ? JSON.parse(savedMails) : [];
    })

    const addMail = (mail) => {
        const newMail = [...mails, { ...mail, isFavorite: false}]
        setMails(newMail)
        localStorage.setItem("mails", JSON.stringify(newMail))
    }

    const deleteMail = (id) => {
        const remove = mails.filter((m) => m.id !== id)
        setMails(remove)
        localStorage.removeItem('mails')
    }

    const updateMail = (id, updatedMail) => {
        const uniqueId = Date.now() + Math.random()
        const updated= mails.map((m) => m.id === id ? { ...mails, ...updatedMail, id: uniqueId} : m)
        setMails(updated)
    }   

     const toggleFavorites = (id) => {
       setMails((prevMails) =>
         prevMails.map((mail) =>
           mail.id === id ? { ...mail, isFavorites: !mail.isFavorites } : mail,
         ),
       );
     };

    useEffect(() => {
      try {
        localStorage.setItem("mails", JSON.stringify(mails));
      } catch (error) {
        console.error("Error saving to localStorage:", error);
      }
    }, [mails]);

    return (
        <MailContext.Provider value={{mails, addMail, deleteMail, updateMail, toggleFavorites}}>
            {children}
        </MailContext.Provider>
    )
}