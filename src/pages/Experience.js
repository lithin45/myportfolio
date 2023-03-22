import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'

import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@material-ui/icons/School'

function Experience () {
    return (
        <div className='experience'>
            <VerticalTimeline lineColor='#3e497a'>
                <VerticalTimelineElement 
                className='vertical-timeline-element--education' 
                date='2016-2017'
                iconStyle={{background: '#3e497a', color: '#fff'}}
                icon={<SchoolIcon/>}
                >
                    <h3 className='vertical-timeline-element-title'>SPR School of Excellence, Miryalaguda, Nalgonda Dist, Telangana</h3>
                    <p>High School Diploma</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Narayana Junior College, Hyderabad, Telangana
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Intermediate
          </h4>

          <p>MPC</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            GITAM University, Vishakapatnam, Andhra Pradesh
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Computer Science and Engineering</p>
        </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience