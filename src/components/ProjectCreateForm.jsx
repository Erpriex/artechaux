import React from 'react';
import ProjectForm from "./ProjectForm";

const ProjectCreateForm = props => {

    const {handleList} = props;

    return (
        <div>
            <button onClick={handleList}>Retour à la liste</button>
            <ProjectForm
                update={false}
            />
        </div>
    );
};

export default ProjectCreateForm;