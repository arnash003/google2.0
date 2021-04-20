import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import SearchResults from '../components/SearchResults';
import { API_KEY, CONTEXT_KEY } from './Keys';
import Response from './Response';





function Search ({results}) {

    const router = useRouter ();

    console.log(results);
    return (
        <div>
         <Head><title>{router.query.term} - Google Search</title>
         <link rel="icon" href="/favicon.ico" />
         </Head>   
         {/* Header Sticky Component */}
         <Header />
         {/* Search Results */}
         <SearchResults results={results} />
        </div>
    )
}

export default Search

export async function getServerSideProps(context) {
    const useDummyData = false ;
    const startIndex = context.query.start || "0";
    
    const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
    ).then(response => response.json());
    // Pass the results to the client. After the server has rendered pass results to client. 
return {
   props: {
       results: data,
   },
};

}


// Server Side Rendering. Search does not happen on the Client side
// Can use Dummy data to Mock