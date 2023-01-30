import React from 'react';

const ProjectCreateForm = () => {

    const handleSubmit = (evt) =>{
        evt.preventDefault();
        //add task in BDD

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={}/>
                <input type="submit" value="Ajouter"/>
            </form>
        </div>
    );
};

export default ProjectCreateForm;