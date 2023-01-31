import React from 'react';

const TaskView = props => {
    const {task} = props;

    console.log('ProjectView : '+task)

    return (
        <div>
            {task ?
                <>
                    <p>Nom : {task.name}</p>
                    <p>Status : {
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
                                : ''}</p>
                </>

                : ''}
        </div>
    );
};

export default TaskView;