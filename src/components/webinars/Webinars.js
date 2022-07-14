import React from 'react'
import EventPage from '../events_page/EventPage'
import {webinarData} from '../../data/webinar_data/webinarData'

function Webinars() {
  return (
    <div className='webinars-container'>
        <EventPage title={'Our Webinars'} padding={'0 50px'} data={webinarData} bgColor={'white'} />
    </div>
  )
}

export default Webinars