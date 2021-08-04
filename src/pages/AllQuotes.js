import QuoteList from "../components/quotes/QuoteList";
import NoQuotesFound from "../components/quotes/NoQuotesFound";


const AllQuotes = ({ allQuotes }) => {


    if (allQuotes.length > 0) return (
        < div >
            <QuoteList quotes={allQuotes}></QuoteList>
        </div >
    )
    else {
        return (
            <NoQuotesFound />
        )
    }


}

export default AllQuotes;
