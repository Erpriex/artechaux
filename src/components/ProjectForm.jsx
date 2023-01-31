import React, {useCallback, useEffect, useState} from 'react';
import {useDirectus} from "../hooks/directus";

const ProjectForm = props => {
    const {project, handleList, update} = props;

    const [clients, setClients] = useState(null);

    const [projectDateDebut, setProjectDateDebut] = useState(project?.start_date)
    const [projectName, setProjectName] = useState(project?.name)
    const [projectCodePostal, setProjectCodePostal] = useState(project?.location)
    const [projectClient, setProjectClient] = useState(project?.owner)
    const [projectStatus, setProjectStatus] = useState(project?.status)

    const directus = useDirectus();

    const getData = useCallback(() => {
        directus.items('directus_users').readByQuery({
            filter: {
                'role': {
                    name: {
                        _eq: 'client'
                    }
                }
            }
        })
            .then(data => {
                    setClients(data.data)
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

    const handleChangeDate = evt => {
        evt.preventDefault();
        setProjectDateDebut(evt.target.value);
    }

    const handleChangeName = evt => {
        evt.preventDefault();
        setProjectName(evt.target.value);
    }

    const handleChangePlace = evt => {
        evt.preventDefault();
        setProjectCodePostal(evt.target.value);
    }

    const handleChangeClient = evt => {
        evt.preventDefault();
        setProjectClient(evt.target.value);
    }

    const handleChangeStatus = evt => {
        evt.preventDefault();
        setProjectStatus(evt.target.value);
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        let newProject = {
            'location': projectCodePostal,
            'name': projectName,
            'owner': projectClient,
            'services': [],
            'start_date': projectDateDebut,
            'status': projectStatus
        }
        console.log(newProject)
        directus.items('projects').createOne(newProject).then((res) => {
                console.log('CREATE : '+res)
                handleList()
            }
        )

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="project-date_debut">Date de début</label>
                <input onChange={handleChangeDate} type="date" id="project-date_debut" name="project-date_debut" value={projectDateDebut}/>

                <label htmlFor="project-name">Nom du Projet</label>
                <input onChange={handleChangeName} type="text" id="project-name" name="project-name" value={projectName}/>

                <label htmlFor="project-place">Code Postal</label>
                <input onChange={handleChangePlace} type="text" id="project-place" name="project-place" value={projectCodePostal}/>

                <label htmlFor="project-owner">Client</label>
                <select onChange={handleChangeClient} id="project-owner" name="project-owner" defaultValue={clients ? clients[0].id : ''} value={projectClient}>
                    {clients ? clients.map(elem => {
                            return <option key={elem.id} value={elem.id}>{elem.first_name} {elem.last_name}</option>
                        })
                        : ''}
                </select>

                <label htmlFor="project-status">Status</label>
                <select onChange={handleChangeStatus} id="project-status" name="project-status" defaultValue="draft" value={projectStatus}>
                    <option value="draft">Brouillon</option>
                    <option value="planned">Plannifié</option>
                    <option value="in_progress">En cours</option>
                    <option value="done">Terminé</option>
                </select>

                <input type="submit" value="Envoyer"/>
            </form>
        </div>
    );
};

export default ProjectForm;