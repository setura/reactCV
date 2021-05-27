import cv from '../resume/Pedro_Amaro_CV.pdf'
import React from 'react';

const Resume = () => {

    return (
        <div className="resume-me-page">
            <embed src={cv} type="application/pdf" width="100%" height="100%" />
        </div>
    )
}

export default Resume
