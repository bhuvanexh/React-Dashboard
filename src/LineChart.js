import React from "react"
import { Line } from "react-chartjs-2"
import { Chart, LineElement, CategoryScale, LinearScale, PointElement, scales } from 'chart.js'
Chart.register(LineElement, CategoryScale, LinearScale, PointElement);
export default function LineChart(props) {

    const [fsize, setFsize] = React.useState(14)
    window.onresize = () => {
        if (window.innerWidth > 1200) {
            setFsize(14)
        } else if (window.innerWidth <= 1200 && window.innerWidth > 600) {
            setFsize(12)
        } else if (window.innerWidth <= 600) {
            setFsize(10)
        }
    }

    let borderWidth = fsize / 5

    const dummyData = [
        {
            labels: ['', 'Week 1', 'Week 2', 'Week 3', 'Week 4', ''],
            data: [
                [100, 420, 150, 450, 180, 280],
                [200, 360, 200, 300, 220, 420]
            ]

        },
        {
            labels: ['', 'Week 1', 'Week 2', 'Week 3', 'Week 4', ''],
            data: [
                [300, 20, 150, 450, 290, 120],
                [100, 120, 10, 250, 320, 380]
            ]

        },
        {
            labels: ['', 'Week 1', 'Week 2', 'Week 3', 'Week 4', ''],
            data: [
                [10, 20, 350, 150, 480, 200],
                [300, 120, 250, 10, 180, 210]
            ]
        }
        ,
        {
            labels: ['', 'Week 1', 'Week 2', 'Week 3', 'Week 4', ''],
            data: [
                [0, 120, 450, 50, 280, 420],
                [200, 170, 250, 350, 80, 120]
            ]
        }
    ]


    const data = {
        // labels: ['', 'Week 1', 'Week 2', 'Week 3', 'Week 4', ''],
        labels: dummyData[props.month].labels,
        datasets: [
            {
                backgroundColor: 'transparent',
                data: dummyData[props.month].data[0],
                borderColor: "#9BDD7C",
                borderWidth: borderWidth,
                pointBorderColor: 'transparent',
                pointBorderWidth: 4,
                tension: .5
            },
            {
                backgroundColor: 'transparent',
                // data: [300, 120, 250, 150, 380],
                data: dummyData[props.month].data[1],
                borderColor: "#E9A0A0",
                borderWidth: borderWidth,
                pointBorderColor: 'transparent',
                pointBorderWidth: 4,
                tension: .5
            }
        ]
    }


    const options = {
        maintainAspectRatio: false,
        plugins: {
            legend: false
        },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    font: {
                        size: fsize + 1,
                    }
                }
            },
            y: {
                min: 0,
                max: 500,
                ticks: {
                    stepSize: 100,
                    font: {
                        size: fsize,
                    }
                },
                grid: {
                    borderDash: [10]
                }
            }
        }
    }




    return (
        <Line data={data} options={options}></Line>
    )
}