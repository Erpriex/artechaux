import React, {useCallback, useEffect, useState} from 'react';
import {useDirectus} from "../hooks/directus";
import ProjectView from "./ProjectView";

const ProjectList = props => {
    const [projectsList, setProjectsList] = useState([]);

    const {handleView, handleEdit, handleDelete} = props;

    const directus = useDirectus();

    const getData = useCallback(() => {
        directus.items('projects').readByQuery('projects')
            .then(data => {
                    setProjectsList(data.data);
                    console.log(data)
                    console.log(data.data)
                }
            )
    }, [directus]);

    useEffect(() => {
        getData();
        const intervalID = setInterval(getData, 3600000);
        return () => {
            clearInterval(intervalID);
        }
    }, [getData])

    return (
        <>
            <h1>Project List</h1>

            <table>
                <thead>
                <tr>
                    <th>Project Name</th>
                    <th>Status</th>
                    <th>Utilities</th>
                </tr>
                </thead>
                <tbody>
                {projectsList.map((project, index) =>
                    <tr key={project.id}>
                        <td>{project.name}</td>
                        <td>
                            {
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
                                    : ''}
                            {
                                project.status === 'draft' ?
                                    'Brouillon'
                                    : ''}
                        </td>
                        <td>
                            <button onClick={evt => handleView(evt, project.id)}>View</button>
                            <button onClick={evt => handleEdit(evt, project.id)}>Edit</button>
                            <button onClick={evt => handleDelete(evt, project.id)}>Delete</button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </>
    );
};

export default ProjectList;