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
            'dist/assets/fellowMugMain-B42gLWKu.webp',
            'dist/assets/fellowMugExtra-CiwDVw-L.webp',
            'dist/assets/fellowMugExtra2-D79ScuSf.webp'
            ]
        );

        return (
            <imageContext.Provider value={imageArr}>
                {children}
            </imageContext.Provider>
        )
}

export { imageContext, ImageProvider }