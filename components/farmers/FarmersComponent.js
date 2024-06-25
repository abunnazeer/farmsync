import React from 'react';
import { Line } from 'react-chartjs-2';
import styles from './FarmersComponent.module.scss';

const FarmersComponent = () => {
  // Mock data for charts
  const cropManagementChartsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // Labels are strings
    datasets: [
      {
        label: 'Growth Chart',
        data: [10, 20, 30, 40, 50, 60, 70],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
      {
        label: 'Harvest Chart',
        data: [5, 10, 15, 20, 25, 30, 35],
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1,
      },
      {
        label: 'Pest Control',
        data: [2, 4, 6, 8, 10, 12, 14],
        fill: false,
        borderColor: 'rgb(54, 162, 235)',
        tension: 0.1,
      },
    ],
  };

  // Mock data for weather forecast
  const weatherForecastData = {
    day: 'Monday',
    temperature: '25°C',
    condition: 'Sunny',
  };

  // Mock data for harvest planning tools
  const harvestPlanningToolsData = [
    {
      name: 'Crop Rotation Planner',
      description: 'Plan crop rotation for next season.',
    },
    {
      name: 'Harvest Calendar',
      description: 'Schedule harvest dates for different crops.',
    },
  ];

  return (
    <div className={styles.mainContent}>
      <div className={styles.section}>
        <h2>Crop Management Charts (Growth, Harvest, Pest Control)</h2>
        <div className={styles.chartSection}>
          {cropManagementChartsData.datasets.map((dataset, index) => (
            <div key={index} className={styles.chart}>
              <h3>{dataset.label}</h3>
              <Line
                data={{
                  labels: cropManagementChartsData.labels,
                  datasets: [dataset],
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h2>Weather Forecast Widget</h2>
        <div className={styles.weatherSection}>
          <p>
            Today's Weather: {weatherForecastData.day},{' '}
            {weatherForecastData.temperature}, {weatherForecastData.condition}
          </p>
        </div>
      </div>

      <div className={styles.section}>
        <h2>Harvest Planning Tools</h2>
        <div className={styles.planningSection}>
          {harvestPlanningToolsData.map((tool, index) => (
            <div key={index} className={styles.tool}>
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FarmersComponent;
