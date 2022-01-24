import './styles/Section1.css';

export default function Section1()
{
    return(
        <section className='section1'>
            <h1 className='section1title'>GROMIT</h1>
            <p className='section1text'>Welcome to the official Gromit web page. </p>
            <p className='section1text'>Read our close shave <a className="section1link" href="https://docs.google.com/presentation/d/e/2PACX-1vQwPlKeKY94Rz_HAd0VkKR4azmSo6mn6xEhUF9sUyVnphsDqAQ1smxVUi6xA0PFcOI8ak-0CJaKTRNn/pub?start=false&loop=false&delayms=3000"> whitepaper</a>!</p>
        </section>
    )
}