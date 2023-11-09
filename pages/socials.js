import { Inter } from 'next/font/google'
import '../app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function Socials() {
	return (
		<>
			<main className="flex min-h-screen flex-col items-center p-24">
				<div className="z-10 max-w-5xl w-full flex flex-col items-start text-sm font-mono lg:flex">
					<div className="mb-4">Hi!</div>
				</div>
				<div className="mb-32 grid text-center lg:text-left">
					<a
						href="https://twitter.com/0xpibs"
						className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2 className={`text-2xl font-semibold`}>
							Twitter
						</h2>
					</a>
				</div>
			</main>
		</>
	)
}