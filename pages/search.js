import Head from 'next/head';
import Header from '../components/Header';
import { API_KEY, CONTEXT_KEY } from './Keys';




function Search ({results}) {
    console.log(results);
    return (
        <div>
         <Head><title>Search Results</title>
         <link rel="icon" href="/favicon.ico" />
         </Head>   
         {/* Header Sticky Component */}
         <Header />
         {/* Search Results */}
        </div>
    )
}

export default Search

export async function getServerSideProps(context) {
    const useDummyData = false;
    
    const data = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}`
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