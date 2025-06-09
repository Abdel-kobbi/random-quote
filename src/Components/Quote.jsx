import { useEffect, useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaTumblr } from "react-icons/fa";

function Quote() {
    const URL = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    const [quotes, setQuotes] = useState([]);
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    const fetchQuotes = async () => {
        try {
            const response = await fetch(URL);
            const data = await response.json();
            setQuotes(data.quotes);
            newQuote();
        } catch (err) {
            console.log(err);
        }
    }

    const newQuote = () => {
        const randomQuote = Math.floor(Math.random() * 102);
        setQuote(quotes[randomQuote].quote)
        setAuthor(quotes[randomQuote].author)
    }

    useEffect(() => {
        fetchQuotes();
    }, [])

    console.log(quotes.length);

    return (
        <div id="quote-box" className='shadow p-5 '>
            <div id="text" className="fw-bold">
                <FaQuoteLeft />&nbsp;
                <p className="d-inline-block">{quote}</p>
                <div id="author" className='p-4 text-end'>
                    {author}
                </div>
            </div>
            <div id="new-quote" className='row align-items-center'>
                <div className="col-6">
                    <button className="btn fs-4 border me-2 "><FaTwitter /></button>
                    <button className="btn fs-4 border"><FaTumblr /></button>
                </div>
                <div className="col-6">
                    <button className="btn btn btn-primary" onClick={newQuote}>New quote</button>
                </div>
            </div>
        </div>
    )
}

export default Quote