import React, {useCallback, useEffect, useState} from 'react';
import ProjectForm from "./ProjectForm";
import {useDirectus} from "../hooks/directus";

const ProjectEditForm = props => {
    const [project, setProject] = useState(null);

    const {projectID, handleList} = props;

    const directus = useDirectus();

    const getData = useCallback(() => {
        directus.items('projects').readOne(projectID)
            .then(data => {
                    setProject(data);
                }
            )
    }, [projectID, directus]);

    useEffect(() => {
        getData();
    }, [getData])

    return (
        <div>
            <button onClick={handleList}>Retour à la liste</button>
            {project && <ProjectForm
                project={project}
                handleList={handleList}
                update={true}
            />}
        </div>
    );
};

export default ProjectEditForm;