import Head from 'next/head'
import Avatar from '../components/Avatar'
import {MicrophoneIcon, ViewGridAddIcon, ViewGridIcon} from "@heroicons/react/solid";
import Image from "next/image";
import {SearchIcon} from "@heroicons/react/outline";
import Footer from '../components/Footer';


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
      {/* Left flex space-x-4 spaces all X components and children*/}
      <div className="flex space-x-4 items-center"> 
        <p className="link">About</p>
        <p className="link">Store</p>

      </div>
      {/* Right */}
      <div className="flex space-x-4 items-center">
        <p className="link">Gmail</p>
        <p className="link">Images</p>

        {/* Icon */}
        <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer "/>


        {/* Avatar */} 

        <Avatar url={"data:image/png;base64,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"} />
      </div>
      </header>

      {/* Body */}
    <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
    <Image 
    src='data:image/png;base64,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'
    height={100}
    width={300}
    />
    <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg  max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xls"> 
      <SearchIcon className="h-5 mr-3 text-gray-500" />
      <input type="text" className="flex-grow focus:outline-none" 
     />
     <MicrophoneIcon className="h-5"/>
    </div>
    <div className="flex flex-col w1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
      <button className="btn">Google Search</button>
    <button className="btn">I am feeling Lucky</button>
    </div>
    </form>

      {/* Footer */}
      <Footer />
    </div>
  )
}


// Mobile Principal Design Platform. Utility Classes. Mobile First Design Policy 
// where you design for the mobile first but then use breakpoints to scale up on larger screens.
// The breakpoints are resembled by an sm for small, md for medium, lg for large,
// xl and 2xl and 3xl etc. Without any breakpoint it is Mobile. (Tailwind CSS)
// In the CSS you will notice that as you adjust the screen and move to that small breakpoint from mobile to web the buttons change their axis