import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faRocket, faClock } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome icons
export default function Timeline() {
    return (
      <div>
        <div className='row'>
          <div className='col-sm'>

          
      <div className="timeline">
        {/* Event 1 */}
        <div className="timelineItem">
          
          <div className="timelineContent">
            <h3><FontAwesomeIcon icon={faClock} /> Reduces IT costs, only pay for what you use</h3>
            
          
          </div>
        </div>
  
        
        
  
        {/* Event 3 */}
        <div className="timelineItem">
     
          <div className="timelineContent">
            <h3><FontAwesomeIcon icon={faClock} />  Enhances security with our safe data center architecture</h3>
           
            
          </div>
        </div>

        <div className="timelineItem">
        
          <div className="timelineContent">
            <h3><FontAwesomeIcon icon={faClock} /> Maximize efficiency of process by focusing on strategic updates</h3>
            
          </div>
        </div>

        
        <div className="timelineItem">
          
          <div className="timelineContent">
            <h3><FontAwesomeIcon icon={faClock} />  Support all workload environment and applications</h3>
           
          </div>
        </div>
        {/* Add more timeline items here */}
      </div>
      </div>

      <div className='col-sm'>
      <div className="timeline">
        {/* Event 1 */}
        <div className="timelineItemm">
        
          <div className="timelineContent">
            <h3><FontAwesomeIcon icon={faCheckCircle} /> Regular support for applications and legacy systems</h3>
           
          </div>
        </div>
  
        
        
  
        {/* Event 3 */}
        <div className="timelineItemm">
         
          <div className="timelineContent">
            <h3><FontAwesomeIcon icon={faClock} /> Accomplish flexible operations for network and storage</h3>
            
          </div>
        </div>

        <div className="timelineItemm">
        
          <div className="timelineContent">
            <h3><FontAwesomeIcon icon={faClock} /> Greater scalability and reliability by optimizing application performance</h3>
            
          </div>
        </div>

        
        <div className="timelineItemm">
         
          <div className="timelineContent">
            <h3><FontAwesomeIcon icon={faClock} /> 99.99% uptime guaranteed and 24/7 technical support</h3>
            
          </div>
        </div>
        {/* Add more timeline items here */}
      </div>
      </div>

      </div>


      </div>
    );
  }