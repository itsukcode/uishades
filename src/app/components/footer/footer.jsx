import Link from 'next/link'


const footer = () => {
    return (
        <>
            <footer className="text-black body-font mt-10">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        
                        <span className="ml-3 text-xl">UI SHADES</span>
                    </Link>
                    <p className="text-sm text-black sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 UISHADES —
                        <Link href="https://twitter.com/itsukcode" className="text-black ml-1" rel="noopener noreferrer" target="_blank">@itsukcode</Link>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <Link href="/"grid-template-columns className="text-black">
                            {/* <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg> */}
                            Instagram
                        </Link>
                        <Link href="https://github.com/itsukcode" className="ml-3 text-black">
                            {/* <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg> */}
                            Github
                        </Link>
                        <Link href="https://twitter.com/itsukcode" className="ml-3 text-black">
                            {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg> */}
                            Twitter
                        </Link>
                        
                    </span>
                </div>
            </footer>
        </>
    )
}

export default footer