import React from "react"
import { Pie } from "react-chartjs-2"
import { Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement);
export default function PieGraph(props) {
    const dummyData = [
        {
            data: [
                [14, 31, 55]
            ]
        },
        {
            data: [
                [45, 20, 30]
            ]

        },
        {
            data: [
                [78, 28, 37],
            ]
        }
        ,
        {
            data: [
                [30, 15, 50]
            ]
        }
    ]


    const data = {
        labels: ['Super Hoodies', 'Custom Short Pants', 'Basic Tees'],
        datasets: [
            {
                backgroundColor: ['#EE8484', '#F6DC7D', '#98D89E'],
                data: dummyData[props.month].data[0],
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