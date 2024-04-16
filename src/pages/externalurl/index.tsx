// externalUrl/index.tsx
import React, { useEffect } from 'react';

const ExternalUrlPage = ({ data }: { data: any }) => {
    useEffect(() => {
        window.location = data.url;
    }, [data.url]);

    return null;
};

export default ExternalUrlPage;