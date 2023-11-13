import Image from 'next/image'
import Link from 'next/link';
import { Inter } from 'next/font/google'
import '../app/globals.css'
import FooterButtons from '../components/footerButtons';

const inter = Inter({ subsets: ['latin'] })

export default function Dune() {
	return (
		<>
			<main className="flex min-h-screen flex-col items-center p-24">
				<div className="z-10 max-w-screen-2xl w-full items-center font-mono text-sm lg:flex mb-20">
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
						Dashboards I&apos;ve made so far
					</p>
				</div>
				<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-left">
					<div className="p-6 mb-8 bg-black rounded-lg shadow-lg border border-gray-600 border-t-2">
						<h2 className="text-2xl font-bold mb-2">Lending</h2>
						<a
							href="https://dune.com/0xpibs/artichoke"
							className="flex items-center group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image src="/artichoke.jpeg" alt="Artichoke Logo" className="mr-2 rounded-lg" width="30" height="30"/>
							<h2 className={`text-2xl font-semibold`}>
								Artichoke
							</h2>
						</a>
					</div>
					<div className="p-6 mb-8 bg-black rounded-lg shadow-lg border border-gray-600 border-t-2">
						<h2 className="text-2xl font-bold mb-2">LPDfi</h2>
						<a
							href="https://dune.com/0xpibs/gammaswap"
							className="flex items-center group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image src="/gammaswap.jpeg" alt="Gammaswap Logo" className="mr-2 rounded-md" width="30" height="30"/>
							<h2 className={`text-2xl font-semibold`}>
								Gammaswap
							</h2>
						</a>
					</div>
					<div className="p-6 mb-8 bg-black rounded-lg shadow-lg border border-gray-600 border-t-2">
						<h2 className="text-2xl font-bold mb-2">Portfolio trackers</h2>
						<a
							href="https://dune.com/0xpibs/convergence"
							className="flex items-center group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image src="/convergence.jpeg" alt="Convergence Logo" className="mr-2 rounded-lg" width="30" height="30"/>
							<h2 className={`text-2xl font-semibold`}>
								Convergence
							</h2>
						</a>
						<a
							href="https://dune.com/0xpibs/ocean-fund"
							className="flex items-center group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image src="/ocean-fund.jpeg" alt="Convergence Logo" className="mr-2 rounded-lg" width="30" height="30"/>
							<h2 className={`text-2xl font-semibold`}>
								Ocean Fund
							</h2>
						</a>
					</div>
					<div className="p-6 mb-8 bg-black rounded-lg shadow-lg border border-gray-600 border-t-2">
						<h2 className="text-2xl font-bold mb-2">Wallets</h2>
						<a
							href="https://dune.com/0xpibs/modular-wallet"
							className="flex items-center group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image src="/modular.jpeg" alt="Convergence Logo" className="mr-2 rounded-lg" width="30" height="30"/>
							<h2 className={`text-2xl font-semibold`}>
								Modular Wallet
							</h2>
						</a>
					</div>
					<div className="p-6 mb-8 bg-black rounded-lg shadow-lg border border-gray-600 border-t-2">
						<h2 className="text-2xl font-bold mb-2">Yield Farming</h2>
						<a
							href="https://dune.com/officialmozaic/moz-xmoz-dashboard"
							className="flex items-center group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image src="/mozaic.png" alt="Convergence Logo" className="mr-2 rounded-lg" width="30" height="30"/>
							<h2 className={`text-2xl font-semibold`}>
								Mozaic
							</h2>
						</a>
					</div>
					
				</div>
				<FooterButtons/>
			</main>
		</>
	)
}