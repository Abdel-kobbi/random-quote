import { FaTwitter } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaTumblr } from "react-icons/fa";

function Quote() {

    return (
        <div id="quote-box" className='shadow p-5 '>
            <div id="text" className="fw-bold">
                <FaQuoteLeft />
                <p className="d-inline-block">&nbsp;Life isn’t about getting and having, it’s about giving and being.</p>
                <div id="author" className='p-4 text-end'>
                    Kevin Kruse
                </div>
            </div>
            <div id="new-quote" className='row align-items-center'>
                <div className="col-6">
                    <button className="btn fs-4 border me-2 "><FaTwitter /></button>
                    <button className="btn fs-4 border"><FaTumblr /></button>
                </div>
                <div className="col-6">
                    <button className="btn btn btn-primary">New quote</button>
                </div>
            </div>
        </div>
    )
}

export default Quote