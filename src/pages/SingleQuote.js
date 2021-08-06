import { Fragment } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";




const SingleQuote = ({ allQuotes }) => {

    const routeMatch = useRouteMatch();

    console.log(allQuotes.map(el => el.id))

    const params = useParams();
    const quote = allQuotes.find(el => el.id === params.quoteId);
    console.log(quote);
    if (!quote) {
        return <p>Not Found</p>
    }

    return (
        <Fragment>
            <HighlightedQuote author={quote.author} text={quote.text} />

            <Route path={routeMatch.path} exact >
                <div className="centered">
                    <Link className="btn--flat" to={`${routeMatch.url}/comments`}>Comments</Link>
                </div>
            </Route>

            < Route path={`${routeMatch.path}/comments`} >
                <Comments />
            </Route>

        </Fragment >
    )
}

export default SingleQuote;
