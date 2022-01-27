
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import logo from '../../common/images/logo.png';

function LastestJob(){
    const LastestJobList = [{
        JobTitle:"[創新中心] Python 工程師",
        JobType : 'Full time ‧ Permanent',
        Salary : "50k - 100k TWD / month",
        JobFunction : 'Back-end Develope',
        Seq:0
    },
    {
        JobTitle:"[創新中心] Project Manager 專案經理",
        JobType : 'Full time ‧ Permanent',
        Salary : "50k - 100k TWD / month",
        JobFunction : 'Back-end Develope',
        Seq:1
    },
    {
        JobTitle:"[資訊] Backend Engineer (Growth Team) 後端工程師",
        JobType : 'Full time ‧ Permanent',
        Salary : "50k - 100k TWD / month",
        JobFunction : 'Back-end Develope',
        Seq:2
    },
    {
        JobTitle:"[資訊] UI 設計師(WEB)",
        JobType : 'Full time ‧ Permanent',
        Salary : "50k - 100k TWD / month",
        JobFunction : 'Back-end Develope',
        Seq:3
    },
    {
        JobTitle:"[創新中心] Python 工程師",
        JobType : 'Full time ‧ Permanent',
        Salary : "50k - 100k TWD / month",
        JobFunction : 'Back-end Develope',
        Seq:4
    },
    {
        JobTitle:"[創新中心] Python 工程師",
        JobType : 'Full time ‧ Permanent',
        Salary : "50k - 100k TWD / month",
        JobFunction : 'Back-end Develope',
        Seq:5
    },
    {
        JobTitle:"[創新中心] Python 工程師",
        JobType : 'Full time ‧ Permanent',
        Salary : "50k - 100k TWD / month",
        JobFunction : 'Back-end Develope',
        Seq:6
    },
    {
        JobTitle:"[創新中心] Python 工程師",
        JobType : 'Full time ‧ Permanent',
        Salary : "50k - 100k TWD / month",
        JobFunction : 'Back-end Develope',
        Seq:7
    },
    {
        JobTitle:"[創新中心] Python 工程師",
        JobType : 'Full time ‧ Permanent',
        Salary : "50k - 100k TWD / month",
        JobFunction : 'Back-end Develope',
        Seq:8
    }];

    let MappingJobList = LastestJobList.filter(j => j.key).map(job => 
        <ul key={job.Seq}>
            <li>{job.JobTitle}</li>
            <li>{job.Salary}</li>
            <li>{job.JobType}</li>
            <li>{job.JobFunction}</li>
        </ul>
    );

    return (
        <Carousel>
            <div>
                {MappingJobList}
            </div>
            <div>
            </div>
            <div>
            </div>
        </Carousel>
    );
}

export default LastestJob;