import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2'
import { Bar, Doughnut } from "react-chartjs-2";
import Element from './Element';

function Graph({warehouse}) {
  return (
    <>
        <Element className='container-fluid mb-4 pt-3 pb-3' style={{height: '300px'}}>
            {warehouse?
                <Bar data={{
                        labels: warehouse.map(w => w.name),
                        datasets: [{
                            label: "Available Space",
                            data: warehouse.map(w => w.space_available),
                            backgroundColor: ['#3490dc', '#6574cd', '#4dc0b5', '#9561e2', '#f66d9b', '#e3342f', '#f6993f', '#38c172', '#6cb2eb'],
                        }],
                    }}
                    
                    height={400}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        legend: {
                            labels: { fontSize: 15, },
                        },
                    }}
                    />
                :<h4>Data not available</h4>}
        </Element>

        <Element className='container-fluid mt-4 pt-3 pb-3' style={{height: '300px'}}>
            {warehouse?
            <Doughnut data={{
                    labels: ['Warehouse Live', 'Not Live'],
                    height: 100,
                    datasets: [{
                        // label: "Live",
                        data: [warehouse.map(w => w.is_live).filter(w => w==1).length, warehouse.map(w => w.is_live).filter(w => w==0).length],
                        backgroundColor: ['#38c172', '#e3342f'],
                    }],
                }}
                height={400}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                }}
                />
                :<h4>Data not available</h4>}
        </Element>
    </>
  );
}

export default Graph;
