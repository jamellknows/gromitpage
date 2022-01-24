import "./styles/Footer.css";

export default function Footer(){

    return(
        <section className="footer">
            <h1 className = "footertitle">
                GROMIT
            </h1>
            <div className="row">
                <ul className = "rowul">
                    <li className = "rowitem">
                        <a className="rowlink">
                            WhitePaper
                        </a>
                    </li>
                    <li className = "rowitem">
                        <a className="rowlink">
                            Metabator
                        </a>
                    </li>
                    <li className = "rowitem">
                        <a className="rowlink">
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>
            <h6 className ="copyright"> Created By JamellKnows for Colonial Intelligence Investments </h6>

        </section>
    )
}

