
import CountUp from 'react-countup';

function CountRev() {
    
    return (
        <CountUp start={0} end={700000} delay={0}>
                {({ countUpRef }) => (
                <div className='count-box'>
                <h4 className='Count-header'>Revenue generated</h4>
                $<span className='count-component' ref={countUpRef} />
            
                </div>
                )}
        </CountUp>
    )
}

export default CountRev

