import { createContext, useState } from 'react';

const imageContext = createContext();

const ImageProvider = ({children}) => {
    // const [imageArr, setImage] = useState(
    //     ['/src/assets/fellowMugMain.webp',
    //      '/src/assets/fellowMugExtra.webp',
    //      '/src/assets/fellowMugExtra2.webp'
    //     ]);

    const [imageArr, setImage] = useState(
            [
            '/assets/fellowMugMain-B42gLWKu.webp',
            '/assets/fellowMugExtra-CiwDVw-L.webp',
            '/assets/fellowMugExtra2-D79ScuSf.webp'
            ]
        );

        return (
            <imageContext.Provider value={imageArr}>
                {children}
            </imageContext.Provider>
        )
}

export { imageContext, ImageProvider }