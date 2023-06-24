import React from 'react';
import PieGraph from './PieGraph';
export default function PieBox() {

    const [monthP, setMonthP] = React.useState(0)

    function handleChangeP(event) {
        const { value } = event.target
        setMonthP(value)
        console.log(value)
    }

    return (
        <div className='bottomCard pie'>
            <p className='bottomCard--topic'>
                <h1>Top product</h1>
                {/* <a href='#'>May-June 2021</a> */}
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
                    <PieGraph month={monthP} />
                </div>
                <div className='pie--value'>
                    <p>
                        <h2 className='pieValue--item pieValue--item1 '>Basic Tees</h2>
                        <span>55%</span>
                    </p>
                    <p>
                        <h2 className='pieValue--item pieValue--item2 '>Custom Short Pants</h2>
                        <span>31%</span>
                    </p>
                    <p>
                        <h2 className='pieValue--item pieValue--item3 '>Super Hoodies</h2>
                        <span>14%</span>
                    </p>
                </div>
            </div>
        </div>
    )
}