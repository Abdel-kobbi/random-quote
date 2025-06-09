import { useEffect, useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaTumblr } from "react-icons/fa";

function Quote() {
    const URL = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    const [quotes, setQuotes] = useState([]);
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    const colors = [
        '#16a085',
        '#27ae60',
        '#2c3e50',
        '#f39c12',
        '#e74c3c',
        '#9b59b6',
        '#FB6964',
        '#342224',
        '#472E32',
        '#BDBB99',
        '#77B1A9',
        '#73A857'
    ];

    const fetchQuotes = async () => {
        try {
            const response = await fetch(URL);
            const data = await response.json();
            setQuotes(data?.quotes);
        } catch (err) {
            console.log(err);
        }
    }

    const newQuote = () => {
        const randomQuote = Math.floor(Math.random() * 102);
        setQuote(quotes[randomQuote]?.quote);
        setAuthor(quotes[randomQuote]?.author);

        const randomColor = Math.floor(Math.random() * 12);
        document.body.style.backgroundColor = colors[randomColor];
    }

    useEffect(() => {
        fetchQuotes();
    }, [])

    useEffect(() => {
        newQuote();
    }, [quotes])


    return (
        <div id="quote-box" className='shadow p-5 mw-100' style={{color:"white"}}>
            <div id="text" className="fw-bold">
                <FaQuoteLeft />&nbsp;
                <p className="d-inline-block">{quote}</p>
                <div id="author" className='p-4 text-end'>
                    - {author}
                </div>
            </div>
            <div id="new-quote" className='row align-items-center'>
                <div className="col-6">
                    <a href="twitter.com/intent/tweet" id="tweet-quote" target="_blank" className="btn fs-4 border me-2 "><FaTwitter style={{color:"white"}} /></a>
                    <a href="" target="_blank" className="btn fs-4 border"><FaTumblr style={{color:"white"}} /></a>
                </div>
                <div className="col-6">
                    <button className="btn btn btn-primary" onClick={newQuote}>New quote</button>
                </div>
            </div>
        </div>
    )
}

export default Quote