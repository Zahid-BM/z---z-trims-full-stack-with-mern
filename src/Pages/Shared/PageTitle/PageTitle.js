import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageTitle = ({ title, pageColor }) => {
    return (
        <>
            <Helmet>
                <title>{title} : Z&Z Trims</title>
                <body class={pageColor} />
            </Helmet>

        </>
    );
};

export default PageTitle;