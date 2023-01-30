import React, {useCallback, useEffect, useState} from 'react';
import {useDirectus} from "../hooks/directus";
import PropTypes from "prop-types";


let data = [];

const CostsChart = props => {

    const {
        projectid
    } = props

    const [dataState, setDataState] = useState({
        data: []
    })

    const directus = useDirectus();

    const getData = useCallback(() => {
        directus.items('projects').readOne(projectid).then(data => {
            let services = data.services;
            services.map(i => {
                directus.items("services").readOne(i).then(data => {
                    setDataState({
                        data: [...dataState, {name: 'Item ' + dataState.length, Départ: 10}]
                    })
                })
            })
        })
        console.log(dataState);
    });

    useEffect(() => {
        getData();
    }, [getData])

    return (
        <div>

        </div>
    );

}

CostsChart.propTypes = {
    projectid: PropTypes.number.isRequired
}

export default CostsChart;