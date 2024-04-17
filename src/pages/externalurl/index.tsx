import React, { useEffect } from 'react';

const ExternalUrlPage = ({ data }: { data: any }) => {
    useEffect(() => {
        if (data && data.url) {
            window.location = data.url;
        }
    }, [data]);

    return null;
};

export default ExternalUrlPage;