import React, {useCallback, useEffect, useState} from 'react';
import {useDirectus} from "../hooks/directus";

const ProjectView = props => {

    const {project} = props;

    console.log('ProjectView : '+project)

    return (
        <div>
            {project ?
                <>
                    <p>Nom : {project.name}</p>
                    <p>Lieu : {project.location}</p>
                    <p>Status : {
                        project.status === 'in_progress' ?
                        'En cours'
                    : ''}
                        {
                            project.status === 'planned' ?
                                'Planifié'
                                : ''}
                        {
                            project.status === 'done' ?
                                'Terminé'
                                : ''}</p>
                </>

            : ''}
        </div>
    );
};

export default ProjectView;