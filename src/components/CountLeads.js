import CountUp from 'react-countup';

function CountLeads() {
    
    return (
        <CountUp start={0} end={16800} delay={0}>
                {({ countUpRef }) => (
                <div className='count-box'>
                <h4 className='Count-header'>Leads generated</h4>
                <span className='count-component' ref={countUpRef} />
            
                </div>
                )}
        </CountUp>
    )
}

export default CountLeads