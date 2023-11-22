import Image from 'next/image'
import Link from 'next/link';

export default function FooterButtons() {
    return (
      <>
        <div className="mb-32 mt-16 grid text-center lg:max-w-screen-2xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <Link
            href="/dune"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            // target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Dune
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              See all dashboards
            </p>
          </Link>

          <a
            href="https://debank.com/profile/0xd22c236b2de5440a0c40041f1436539a715181a1"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Portfolio
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Projects I&apos;m watching
            </p>
          </a>

          <Link
            href="https://opensea.io/0xd22c236b2De5440A0c40041F1436539A715181a1"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              OpenSea
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Explore my NFT collection
            </p>
          </Link>

          <Link
            // href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            href='/socials'
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            // target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Connect
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Connect with me on socials
            </p>
          </Link>
        </div>
        <div className="fixed bottom-4 right-4 text-sm">
          made by <a href="https://notnotsez-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:pointer">sez</a>
        </div>
      </>
    )
}