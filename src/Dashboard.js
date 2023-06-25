import React from 'react';
import images from "./images"
import PieBox from "./PieBox"
import LineChart from "./LineChart"

export default function Dashboard(props) {
    function handleClickHam() {
        const lines = document.querySelectorAll('.line');
        const ham = document.querySelector('.hamburger');
        const dashboard = document.querySelector('.dashboard--left');
        lines[0].classList.toggle('lineOne')
        lines[1].classList.toggle('lineTwo')
        lines[2].classList.toggle('lineThree')
        ham.classList.toggle('cross')
        dashboard.classList.toggle('dashboard--left--ham')

    }



    const [monthL, setMonthL] = React.useState(0)

    function handleChangeL(event) {
        const { value } = event.target
        setMonthL(value)
        console.log(value)
    }


    return (
        <div className='dashboard--outer'>
            <div className='dashboard--left' >
                <h1 >Board.</h1>
                <ul>
                    <li><img src={images.dashboard_icon} alt="" /> Dashboard</li>
                    <li><img src={images.transaction_icon} alt="" />Transactions</li>
                    <li><img src={images.schedule_icon} alt="" />Schedules</li>
                    <li><img src={images.user_icon} alt="" />Users</li>
                    <li><img src={images.setting_icon} alt="" />Settings</li>
                </ul>
                <div className='dashboard--left--bottom'>
                    <a href='#' onClick={props.signOut} >Sign Out</a>
                    <a href="#"> Help</a>
                    <a href="#"> Contact Us</a>
                </div>

            </div>
            <div className='dashboard--right' >
                <div className='dashboard--right--db' >
                    <div className="hamburger" onClick={handleClickHam}>
                        <div className="line "></div>
                        <div className="line "></div>
                        <div className="line "></div>
                    </div>
                    <h2 id='hello' >Dashboard</h2>
                    <div className='search--wrapper'>
                        <input type="text" placeholder='search' />
                        <span></span>
                    </div>
                    <a href=""><img src={images.Vector} alt="" /></a>
                    <img src={props.picture} className="userPfp" alt="" />
                </div>
                <div className='dashboard--right--cards' >
                    <div className='card'>
                        <img src={images.Vector_1} alt="" />
                        <span>Total Revenues</span>
                        <h2>$2,129,430</h2>
                    </div>
                    <div className='card'>
                        <img src={images.total_transaction_icon} alt="" />
                        <span>Total Transactions</span>
                        <h2>1,520</h2>
                    </div>
                    <div className='card'>
                        <img src={images.Vector_2} alt="" />
                        <span>Total Likes</span>
                        <h2>9,721</h2>
                    </div>
                    <div className='card'>
                        <img src={images.Vector_3} alt="" />
                        <span>Total Users</span>
                        <h2>892</h2>
                    </div>
                </div>
                <div className='dashboard--graph'>
                    <h1>Activities</h1>
                    <div className='graph--info'>
                        <select
                            value={monthL}
                            onChange={handleChangeL}
                            name="month"
                        >
                            <option value="0">May-June 2021</option>
                            <option value="1">June-July 2021</option>
                            <option value="2">July-Aug 2021</option>
                            <option value="3">Aug-Sept 2021</option>

                        </select>
                        <span>Guest</span>
                        <span>User</span>
                    </div>
                    <div className='graph--main'>
                        <LineChart month={monthL} />

                    </div>
                </div>
                <div className='right--bottomCards'>
                    <PieBox />
                    <div className='bottomCard schedule'>
                        <p className='bottomCard--topic'>
                            <h1>Today's schedule</h1>
                            <a href="#">See All</a>
                        </p>
                        <div>
                            <h2>Meeting with suppliers from kuta bali</h2>
                            <span>14:00-15:00</span>
                            <span>at Sunset Road, Kuta, Bali</span>
                        </div>
                        <div>
                            <h2>Check operations at Giga Factory 1</h2>
                            <span>18:00-20:00</span>
                            <span>at Central Jakarta</span>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}