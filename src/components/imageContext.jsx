import { createContext, useState } from 'react';

const imageContext = createContext();

const ImageProvider = ({children}) => {
    const [imageArr, setImage] = useState(
        ['/src/assets/fellowMugMain.webp',
         '/src/assets/fellowMugExtra.webp',
         '/src/assets/fellowMugExtra2.webp'
        ]);

        return (
            <imageContext.Provider value={{imageArr, setImage}}>
                {children}
            </imageContext.Provider>
        )
}

export { imageContext, ImageProvider }