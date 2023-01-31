import React, {useState} from 'react';
import ProjectList from "../components/ProjectList";
import ProjectEditForm from "../components/ProjectEditForm";
import ProjectDashboard from "./ProjectDashboard";
import ProjectCreateForm from "../components/ProjectCreateForm";
import {useDirectus} from "../hooks/directus";

const ProjectListPage = () => {

    const [viewStatus, setViewStatus] = useState('list')
    const [projectID, setProjectID] = useState(0);

    const directus = useDirectus();

    const handleView = (evt, projectID) => {
        evt.preventDefault();
        setViewStatus('view')
        setProjectID(projectID)
    }

    const handleEdit = (evt, projectID) => {
        evt.preventDefault();
        setViewStatus('edit')
        setProjectID(projectID)
    }

    const handleList = evt => {
        evt.preventDefault();
        setViewStatus('list')
        setProjectID(projectID)
    }

    const handleAdd = evt => {
        evt.preventDefault();
        setViewStatus('add')
    }

    const handleDelete = (evt, projectID) => {
        evt.preventDefault();
        directus.items('projects').deleteOne(projectID).then((res) => {
            console.log(res)
        })
    }

    return (
        <div>
            {viewStatus === 'list' ?
                <ProjectList
                    viewStatus = {viewStatus}
                    handleView = {handleView}
                    handleEdit = {handleEdit}
                    handleList = {handleList}
                    handleDelete = {handleDelete}
                />
                : ''}
            {viewStatus === 'view' ?
                <ProjectDashboard
                    handleList = {handleList}
                    projectID = {projectID}
                />
                : ''}
            {viewStatus === 'edit' ?
                <ProjectEditForm
                    handleList = {handleList}
                    projectID = {projectID}
                />
                : ''}
            {viewStatus === 'add' ?
                <ProjectCreateForm
                    handleList = {handleList}
                />
                : ''}
            {viewStatus !== 'add' ?
                <button onClick={handleAdd}>Ajouter un projet</button>
                : ''}
        </div>
    );
};

export default ProjectListPage;