import React, {useCallback, useEffect, useState} from 'react';
import {useDirectus} from "../hooks/directus";

const TasksList = props => {
    const [tasksList, setTasksList] = useState([]);

    const {handleView, handleEdit, handleDelete, projectID} = props;

    const directus = useDirectus();

    const getData = useCallback(() => {
        directus.items('services').readByQuery({
            filter: {
                'project': {
                    _eq: projectID
                }
            }
    })
    .then(data => {
                setTasksList(data.data);
                console.log(data)
                console.log(data.data)
            }
        )
    }, [directus]);

    useEffect(() => {
        getData();
    }, [getData])

    return (
        <>
            <h1>Task List</h1>

            <table>
                <thead>
                <tr>
                    <th>Task Name</th>
                    <th>Status</th>
                    <th>Utilities</th>
                </tr>
                </thead>
                <tbody>
                {tasksList.map((task, index) =>
                    <tr key={task.id}>
                        <td>{task.name}</td>
                        <td>
                            {
                                task.status === 'in_progress' ?
                                    'En cours'
                                    : ''}
                            {
                                task.status === 'planned' ?
                                    'Planifié'
                                    : ''}
                            {
                                task.status === 'done' ?
                                    'Terminé'
                                    : ''}
                            {
                                task.status === 'draft' ?
                                    'Brouillon'
                                    : ''}
                        </td>
                        <td>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </>
    );
};

export default TasksList;