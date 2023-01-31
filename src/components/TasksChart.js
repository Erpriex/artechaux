import React, { useCallback, useEffect, useState } from "react";
import { useDirectus } from "../hooks/directus";
import PropTypes from "prop-types";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, BarChart, Bar, Tooltip } from "recharts";
import TimeUtils from "../utils/TimeUtils";

const TasksChart = (props) => {
  const { projectid, width, height } = props;

  const [dataState, setDataState] = useState();

  const directus = useDirectus();

  let servicesDates = new Map();

  let dateStartProject = null;

  const formatData = (servicesDates, dateStartProject) => {
    if (servicesDates.size !== 0) {
      let currentDate = dateStartProject;
      let datesServices = new Map();
      let dateUnfinded = 0;
      while (dateUnfinded < 900) {
        dateUnfinded++;
        servicesDates.forEach((value, key, map) => {
          value.forEach((valueb) => {
            if (TimeUtils.equalsDate(currentDate, valueb)) {
              if (datesServices.has(currentDate)) {
                let services = datesServices.get(currentDate);
                services.push(valueb);
                datesServices.set(currentDate, services);
              } else {
                datesServices.set(currentDate, [key]);
              }
            }
          });
        });
        currentDate = TimeUtils.incrementDate(currentDate);
      }
      let data = [];
      datesServices.forEach((value, key) => {
        let dateBuilder =
          (key.getDate() < 10 ? "0" + key.getDate() : key.getDate()) +
          "/" +
          (key.getMonth() < 10 ? "0" + key.getMonth() : key.getMonth()) +
          "/" +
          key.getFullYear();
        let item = { name: dateBuilder, Artisan: value.length };
        data.push(item);
      });
      setDataState(data);
    }
  };

  const getData = () => {
    directus
      .items("projects")
      .readOne(projectid)
      .then((data) => {
        dateStartProject = new Date(data.start_date);
        let services = data.services;
        let servicesLength = services.length;
        let countService = 0;
        services.map((i) => {
          countService++;
          directus
            .items("services")
            .readOne(i)
            .then((data) => {
              if (data.craftsman !== null) {
                let startDateService = new Date(data.start_date);
                let endDateService = startDateService;
                let dayDuration = Math.round(data.duration / (1000 * 60 * 60 * 24));
                let dateItemsService = [startDateService];
                for (let j = 0; j < dayDuration; j++) {
                  endDateService = TimeUtils.incrementDate(endDateService);
                  dateItemsService.push(endDateService);
                }
                servicesDates.set(i, dateItemsService);
              }
              if (countService >= servicesLength) {
                formatData(servicesDates, dateStartProject);
              }
            });
        });
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <BarChart
      style={{ paddingTop: "70px" }}
      width={props.width}
      height={props.height}
      data={dataState}>
      <Bar type='monotone' dataKey='Artisan' fill='#217165' />
      <Tooltip />
      <XAxis dataKey='name' />
      <YAxis />
    </BarChart>
  );
};

TasksChart.propTypes = {
  projectid: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default TasksChart;
