
import React from 'react';

export type LoadingProps = {
    message: string;
    loadingText: string;
    setLoadingText: React.Dispatch<React.SetStateAction<string>>;
    dots: string | null;
    setDots: React.Dispatch<React.SetStateAction<string>>;
};


