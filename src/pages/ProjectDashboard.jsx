import React, {useCallback, useEffect, useState} from 'react';
import {useDirectus} from "../hooks/directus";
import ProjectView from "../components/ProjectView";
import TasksList from "../components/TasksList";

const ProjectDashboard = props => {

    const [project, setProject] = useState();

    const {projectID, handleList} = props;

    const [onglet, setOnglet] = useState('details')

    const directus = useDirectus();

    const getData = useCallback(() => {
        directus.items('projects').readOne(projectID)
            .then(data => {
                    setProject(data);
                    console.log(data)
                }
            )
    }, [projectID, directus]);

    console.log('Project readOne : '+project)

    useEffect(() => {
        getData();
        const intervalID = setInterval(getData, 3600000);
        return () => {
            clearInterval(intervalID);
        }
    }, [getData])

    return (
        <div>
            <button onClick={handleList}>Retour à la liste</button>
            {onglet === 'details' ?
                <ProjectView
                    project = {project}
                />
            : ''}
            <button onClick={()=>setOnglet('tasklist')}>Liste des tâches</button>
            {onglet === 'tasklist' ?
                <TasksList
                    projectID = {projectID}
                />
                : ''}
            {onglet === 'tasklistview' ?
                <TasksList
                    project = {project}
                />
                : ''}
            {onglet === 'tasklistedit' ?
                <TasksList
                    project = {project}
                />
                : ''}
        </div>
    );
};

export default ProjectDashboard;