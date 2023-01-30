import React, {useCallback, useEffect } from 'react';
import {useDirectus} from "../hooks/directus";
import PropTypes from "prop-types";
import {LineChart, Line, CartesianGrid, XAxis, YAxis, BarChart, Bar, Tooltip} from 'recharts';
const data = [{name: 'Item 1', Artisan: 4}, {name: 'Item 2', Artisan: 10}, {name: 'Item 3', Artisan: 12}, {name: 'Item 4', Artisan: 8}];

const LoadProfileChart = props => {

    const {
        projectid
    } = props

    const directus = useDirectus();

    let services = null;

    const getData = useCallback(() => {
        directus.items('projects').readOne(projectid).then(data => {
            services = data.services;
            services.map(i => {
                directus.items("services").readOne(i).then(data => {
                    //console.log(data);
                })
            })
        })
    });

    useEffect(() => {
        getData();
    }, [getData])

    return (
        <BarChart width={400} height={400} data={data}>
            <Bar type="monotone" dataKey="Artisan" fill="#217165" />
            <Tooltip />
            <XAxis dataKey="name" />
            <YAxis />
        </BarChart>
    );
};

LoadProfileChart.propTypes = {
    projectid: PropTypes.number.isRequired
}

export default LoadProfileChart;