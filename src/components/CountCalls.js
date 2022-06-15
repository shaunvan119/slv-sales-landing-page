import CountUp from 'react-countup';

function CountCalls() {
    
    return (
        <CountUp start={0} end={130520} delay={0}>
                {({ countUpRef }) => (
                <div className='count-box'>
                <h4 className='Count-header'>Sales Calls Made</h4>
                <span className='count-component' ref={countUpRef} />
            
                </div>
                )}
        </CountUp>
    )
}

export default CountCalls