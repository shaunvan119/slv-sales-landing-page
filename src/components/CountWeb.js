import CountUp from 'react-countup';

function CountWeb() {
    
    return (
        <CountUp start={0} end={200} delay={0}>
                {({ countUpRef }) => (
                <div className='count-box'>
                <h4 className='Count-header'>Websites transformed</h4>
                <span className='count-component' ref={countUpRef} />
            
                </div>
                )}
        </CountUp>
    )
}

export default CountWeb