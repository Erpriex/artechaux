import React, {useCallback, useEffect, useState} from 'react';

const ProjectList = () => {

    const getData = useCallback(() => {
        fetch('')
            .then(res => res.json())
            .then(data => {

            })
    }, [])

    return (
        <div>

        </div>
    );
};

export default ProjectList;