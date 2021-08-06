import QuoteList from "../components/quotes/QuoteList";



const AllQuotes = ({ allQuotes }) => {


    if (allQuotes) return (
        < div >
            <QuoteList quotes={allQuotes}></QuoteList>
        </div >
    )



}

export default AllQuotes;
