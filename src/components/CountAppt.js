import CountUp from 'react-countup';

function CountAppts() {
    
    return (
        <CountUp start={0} end={13000} delay={0}>
                {({ countUpRef }) => (
                <div className='count-box'>
                <h4 className='Count-header'>Appointments set</h4>
                <span className='count-component' ref={countUpRef} />
            
                </div>
                )}
        </CountUp>
    )
}

export default CountAppts