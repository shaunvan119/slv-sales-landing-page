import ProfilePic from '../assets/profilepic.jpg';

function PersonalProfile() {
    
    return (
        
        <div class="col-md-4">
            <div class="profile-card-4 text-center">
            <img class="img img-responsive" src={ProfilePic} alt="Logo"/>
        <div class="profile-content">
            <div class="profile-name">
             
            </div>
            <div class="profile-description">
            <h4>Shaun Van Amersfoort - <span style={{fontSize: '16px'}}>OWNER SLV PERFORMANCE</span><br/>Business development | Web developer</h4>
            <p>I have been working in business development based roles for the past 7 years,
           selling complex executive level enterprise agreements within the Legal,
           construction,Automotive,education, travel and fitness industry. 
           I have personally generated over 7 million in sales,established
           complex outbound sales frameworks and built websites that have
           generate eager to buy leads.</p>

           <p><span style={{fontWeight: 'bold'}}>Yarris Technologies:</span>Helped establish a complex effective sales process, and an international sales strategy to grow in the US and Singapore.</p>
           <p><span style={{fontWeight: 'bold'}}>Worldstrides:</span>Built a cold sale funnel to a pipeline of 2.9 million dollars in sales, across a 10 month period.</p>
           <p><span style={{fontWeight: 'bold',}}>Australian Institute of Personal Trainers:</span>I built a lead generating network from the ground up, which has resulted in achieving 2.5 million in sales revenue from my start date in 2016 to 2019.</p>
           </div>
            
        </div>
    </div>
</div>

    )
}

export default PersonalProfile