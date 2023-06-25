import React from "react"
import { Pie } from "react-chartjs-2"
import { Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement);
export default function PieGraph(props) {


    const data = {
        labels: ['Super Hoodies', 'Custom Short Pants', 'Basic Tees'],
        datasets: [
            {
                backgroundColor: ['#EE8484', '#F6DC7D', '#98D89E'],
                data: props.dummyData[props.month].data,
                borderWidth: 0,
            }
        ]
    }




    return (
        <div className="pie--container">
            <Pie data={data} />
        </div>
    )
}