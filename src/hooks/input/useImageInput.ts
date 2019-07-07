import React, { useState, useRef } from 'react';

const useImageInput = () => {
    const [profileImage, setProfileImage] = useState<any>(null);
    const inputEl = useRef<any>(undefined);

    const onButtonClick = () => {
        if(inputEl.current) {
            inputEl.current.click();
        }
    }

    const onInputChange = (event: any) => {
        if (event.target.files.length == 0) { return }
        const file = event.target.files[0];
        
        setProfileImage(window.URL.createObjectURL(file));
    }

    return {
        profileImage, 
        setProfileImage,
        inputEl,
        onButtonClick,
        onInputChange
    }
}

export default useImageInput;