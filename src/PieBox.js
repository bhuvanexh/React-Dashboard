import React from 'react';
import PieGraph from './PieGraph';
export default function PieBox() {

    const [monthP, setMonthP] = React.useState(0)

    function handleChangeP(event) {
        const { value } = event.target
        setMonthP(value)
        console.log(value)
    }


    const dummyData = [
        {
            data:
                [14, 31, 55]

        },
        {
            data:
                [45, 20, 30]


        },
        {
            data:
                [78, 28, 37],

        }
        ,
        {
            data:
                [30, 15, 50]

        }
    ]

    return (
        <div className='bottomCard pie'>
            <p className='bottomCard--topic'>
                <h1>Top product</h1>
                <select
                    value={monthP}
                    onChange={handleChangeP}
                    name="month"
                >
                    <option value="0">May-June 2021</option>
                    <option value="1">June-July 2021</option>
                    <option value="2">July-Aug 2021</option>
                    <option value="3">Aug-Sept 2021</option>

                </select>
            </p>
            <div className='pie--lower'>
                <div className='graph--pie'>
                    <PieGraph month={monthP} dummyData={dummyData} />
                </div>
                <div className='pie--value'>
                    <p>
                        <h2 className='pieValue--item pieValue--item1 '>Basic Tees</h2>
                        <span>{dummyData[monthP].data[0]}%</span>
                    </p>
                    <p>
                        <h2 className='pieValue--item pieValue--item2 '>Custom Short Pants</h2>
                        <span>{dummyData[monthP].data[1]}%</span>
                    </p>
                    <p>
                        <h2 className='pieValue--item pieValue--item3 '>Super Hoodies</h2>
                        <span>{dummyData[monthP].data[2]}%</span>
                    </p>
                </div>
            </div>
        </div>
    )
}