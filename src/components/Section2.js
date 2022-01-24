import './styles/Section2.css';
import Box from './Box';
import gromit from './images/gromitLogo-transparent.png';
import sprocket from './images/sprocket - transparent.png';
import cheese from './images/wallace-big-cheese.png';

export default function Section2()
{
    return(
        <section className="section2">
            <div className="box-container">
                <Box propsImage={gromit}
                    propsText={"Gromit"}
                    bgColor={"red"}
                />
                   <Box propsImage={sprocket}
                    propsText={"Sprocket"}
                    bgColor={"blue"}
                />
                   <Box propsImage={cheese}
                    propsText={"Cheese"}
                    bgColor={"green"}
                />
            </div>
            <p className='section2text'>
                From the time Gromit was prophesised it has been 
                a beacon of hope in an otherwise confusing and 
                volatile market.  
            </p>
            <p className='section2text'>
                A planned starting supply  of 1 quadrillion.  
            </p>
       
        
            

        </section>
    )
}