import Image from 'next/image'
import Link from 'next/link';
import { Inter } from 'next/font/google'
import '../app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function Socials() {
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
						Connect with me
					</p>
				</div>
				<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-left">
					<a
						href="https://twitter.com/0xpibs"
						className="flex items-center group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="/x.png" alt="Artichoke Logo" className="mr-2 rounded-lg" width="30" height="30"/>
						<h2 className={`text-2xl font-semibold`}>
							Twitter
						</h2>
					</a>
				</div>
			</main>
		</>
	)
}