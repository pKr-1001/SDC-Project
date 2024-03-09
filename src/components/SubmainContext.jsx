import { createContext, useState } from "react";

    const SubmainContext = createContext();

    const SubmainProvider = ({ children }) => {
        const [mugData, setMugData] = useState({
            title: '',
            header1: '',
            header2: '',
            header3: '',
            desc1: '',
            desc2: '',
            desc3: ''
        });
        const [pic, setPic] = useState('')

        const value = { mugData, pic };

        return (
            <SubmainContext.Provider value={value}>
                {children}
            </SubmainContext.Provider>
        )
    }

