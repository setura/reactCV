import cv from '../resume/CV-02-21-Zurich.pdf'
import React from 'react';

const Resume = () => {

    return (
        <div className="resume-me-page">
            <embed src={cv} type="application/pdf" width="100%" height="100%" />
        </div>
    )
}

export default Resume