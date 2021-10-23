import '../styles/globals.css'
import Link from 'next/link'
import { Icon } from "@iconify/react";
import githubIcon from "@iconify/icons-simple-icons/github";
import instagramIcon from "@iconify/icons-simple-icons/instagram";
import twitterIcon from "@iconify/icons-simple-icons/twitter";

function MyApp({ Component, pageProps }) {

  return (
    <body className="bg-red-50">
    <div className="mx-auto my-8 w-9/12">
      <header>
        <h1 className="text-6xl font-bold text-center">Cole Blog</h1>
        <nav className="my-4">
         
          <ul className="flex flex-row justify-center space-x-4">
            <li>
              <Link href="/">
                <a className="">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Component {...pageProps} />
      <footer className="flex flex-col items-center justify-center w-full h-24 text-gray-600 border-t mt-8 border-gray-300">
          <nav className="flex flex-row">
            <a className="mr-6" href="https://github.com/K-tang-mkv">
              <Icon className="w-6 h-6" icon={githubIcon} />
            </a>
            <a className="mr-6" href="https://www.instagram.com/">
              <Icon className="w-6 h-6" icon={instagramIcon} />
            </a>
            <a href="https://twitter.com/Tang13220820">
              <Icon className="w-6 h-6" icon={twitterIcon} />
            </a>
          </nav>
          <div className="mt-2">
            All content © Me
          </div>
      </footer>
      
    </div>
    </body>
  )
}

export default MyApp
