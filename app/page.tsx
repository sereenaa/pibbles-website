import Image from 'next/image'
import Link from 'next/link';
import Carousel from '../components/carousel';

export default function Home() {

  const items = [
    <div key="Gammaswap" className="w-full">
      <a href="https://twitter.com/GammaSwapLabs" target="_blank" rel="noopener noreferrer" className="flex items-center mb-4">
        <Image src="/gammaswap.jpeg" alt="Gammaswap Logo" className="mr-2 rounded-md" width="30" height="30"/>
        <h2 className="text-xl font-bold">Gammaswap</h2>
      </a>
      <div className="container bg-gray-300 rounded-md" style={{ position: 'relative', width: '100%', height: '400px' }}>
        <iframe 
            src="https://dune.com/embeds/3058219/5096743/42781e08-d6a4-4aa3-a9e7-9bd7b3595c10"
            width="100%" 
            height="400"
            style={{ border: 'none' }} 
        >
        </iframe>
        <a 
            href="https://dune.com/0xpibs/gammaswap" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '9%',
                display: 'block'
            }}
        >
        </a>
      </div>
    </div>, 
    <div key="Ocean Fund">
      <a href="https://twitter.com/OceanFundeth" target="_blank" rel="noopener noreferrer" className="flex items-center mb-4">
        <Image src="/ocean-fund.jpeg" alt="Ocean Fund Logo" className="mr-2 rounded-lg" width="30" height="30"/>
        <h2 className="text-xl font-bold">Ocean Fund</h2>
      </a>
      <div className="container bg-gray-300 rounded-md" style={{ position: 'relative', width: '100%', height: '400px' }}>
        <iframe 
            src="https://dune.com/embeds/3173881/5298175"
            width="100%" 
            height="400"
            style={{ border: 'none' }} 
        >
        </iframe>
        <a 
            href="https://dune.com/0xpibs/ocean-fund" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '9%',
                display: 'block'
            }}
        >
        </a>
      </div>
    </div>, 
    <div key="Convergence">
      <a href="https://twitter.com/Convergence_fi" target="_blank" rel="noopener noreferrer" className="flex items-center mb-4">
        <Image src="/convergence.jpeg" alt="Convergence Logo" className="mr-2 rounded-lg" width="30" height="30"/>
        <h2 className="text-xl font-bold">Convergence</h2>
      </a>
      <div className="container bg-gray-300 rounded-md" style={{ position: 'relative', width: '100%', height: '400px' }}>
        <iframe 
            src="https://dune.com/embeds/3087694/5183886/d0f4b2b8-0226-4516-8459-0240deb500e1"
            width="100%" 
            height="400"
            style={{ border: 'none' }} 
        >
        </iframe>
        <a 
            href="https://dune.com/0xpibs/convergence" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '9%',
                display: 'block'
            }}
        >
        </a>
      </div>
    </div>, 
    <div key="Artichoke">
      <a href="https://twitter.com/artichoke_fi" target="_blank" rel="noopener noreferrer" className="flex items-center mb-4">
        <Image src="/artichoke.jpeg" alt="Artichoke Logo" className="mr-2 rounded-lg" width="30" height="30"/>
        <h2 className="text-xl font-bold">Artichoke</h2>
      </a>
      <div className="container bg-gray-300 rounded-md" style={{ position: 'relative', width: '100%', height: '400px' }}>
        <iframe 
            src="https://dune.com/embeds/3147660/5254044"
            width="100%" 
            height="400"
            style={{ border: 'none' }} 
        >
        </iframe>
        <a 
            href="https://dune.com/0xpibs/artichoke" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '9%',
                display: 'block'
            }}
        >
        </a>
      </div>
    </div>
  ];


  return (
    

    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative">
      <div className="z-10 max-w-screen-2xl w-full items-center font-mono text-sm lg:flex">
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] mr-3">
          <Link href="/">
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                src="/pibbles-profile-pic.png"
                alt="Next.js Logo"
                width={50}
                height={30}
                priority
            />
          </Link>
        </div>
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Welcome to my website!
        </p>
      </div>
      <div className="flex flex-col items-center mt-5">
        <p className="font-mono">Some of my most popular dashboards</p>
        <div className="animate-bounce mt-2"> {/* Animated bounce effect */}
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>

      <Carousel items={items} />
      
      <div className="mb-32 mt-16 gap-8 grid text-center lg:max-w-screen-2xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left z-10">
        <div>
          <a href="https://twitter.com/GammaSwapLabs" target="_blank" rel="noopener noreferrer" className="flex items-center mb-4">
            <Image src="/gammaswap.jpeg" alt="Gammaswap Logo" className="mr-2 rounded-md" width="30" height="30"/>
            <h2 className="text-xl font-bold">Gammaswap</h2>
          </a>
          <div className="container bg-gray-300 rounded-md" style={{ position: 'relative', width: '100%', height: '400px' }}>
            <iframe 
                src="https://dune.com/embeds/3058219/5096743/42781e08-d6a4-4aa3-a9e7-9bd7b3595c10"
                width="100%" 
                height="400"
                style={{ border: 'none' }} 
            >
            </iframe>
            <a 
                href="https://dune.com/0xpibs/gammaswap" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '9%',
                    display: 'block'
                }}
            >
            </a>
          </div>
        </div>
        <div>
          <a href="https://twitter.com/OceanFundeth" target="_blank" rel="noopener noreferrer" className="flex items-center mb-4">
            <Image src="/ocean-fund.jpeg" alt="Ocean Fund Logo" className="mr-2 rounded-lg" width="30" height="30"/>
            <h2 className="text-xl font-bold">Ocean Fund</h2>
          </a>
          <div className="container bg-gray-300 rounded-md" style={{ position: 'relative', width: '100%', height: '400px' }}>
            <iframe 
                src="https://dune.com/embeds/3173881/5298175"
                width="100%" 
                height="400"
                style={{ border: 'none' }} 
            >
            </iframe>
            <a 
                href="https://dune.com/0xpibs/ocean-fund" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '9%',
                    display: 'block'
                }}
            >
            </a>
          </div>
        </div>
        <div>
          <a href="https://twitter.com/Convergence_fi" target="_blank" rel="noopener noreferrer" className="flex items-center mb-4">
            <Image src="/convergence.jpeg" alt="Convergence Logo" className="mr-2 rounded-lg" width="30" height="30"/>
            <h2 className="text-xl font-bold">Convergence</h2>
          </a>
          <div className="container bg-gray-300 rounded-md" style={{ position: 'relative', width: '100%', height: '400px' }}>
            <iframe 
                src="https://dune.com/embeds/3087694/5183886/d0f4b2b8-0226-4516-8459-0240deb500e1"
                width="100%" 
                height="400"
                style={{ border: 'none' }} 
            >
            </iframe>
            <a 
                href="https://dune.com/0xpibs/convergence" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '9%',
                    display: 'block'
                }}
            >
            </a>
          </div>
        </div>
        <div>
          <a href="https://twitter.com/artichoke_fi" target="_blank" rel="noopener noreferrer" className="flex items-center mb-4">
            <Image src="/artichoke.jpeg" alt="Artichoke Logo" className="mr-2 rounded-lg" width="30" height="30"/>
            <h2 className="text-xl font-bold">Artichoke</h2>
          </a>
          <div className="container bg-gray-300 rounded-md" style={{ position: 'relative', width: '100%', height: '400px' }}>
            <iframe 
                src="https://dune.com/embeds/3147660/5254044"
                width="100%" 
                height="400"
                style={{ border: 'none' }} 
            >
            </iframe>
            <a 
                href="https://dune.com/0xpibs/artichoke" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '9%',
                    display: 'block'
                }}
            >
            </a>
          </div>
        </div>
      </div>
      <br></br>

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
    </main>
  )
}
