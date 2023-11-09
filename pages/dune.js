import { Inter } from 'next/font/google'
import '../app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function Dune() {
	return (
		<>
			<main className="flex min-h-screen flex-col items-center p-24">
				<div className="z-10 max-w-5xl w-full flex flex-col items-start text-sm font-mono lg:flex">
					<div className="mb-4">Dashboards I've made:</div>
				</div>
				<div className="mb-32 grid text-center lg:text-left">
					<a
						href="https://dune.com/0xpibs/gammaswap"
						className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2 className={`text-2xl font-semibold`}>
							Gammaswap
						</h2>
					</a>
                    <a
						href="https://dune.com/0xpibs/artichoke"
						className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2 className={`text-2xl font-semibold`}>
							Artichoke
						</h2>
					</a>
                    <a
						href="https://dune.com/0xpibs/convergence"
						className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2 className={`text-2xl font-semibold`}>
							Convergence
						</h2>
					</a>
                    <a
						href="https://dune.com/0xpibs/ocean-fund"
						className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2 className={`text-2xl font-semibold`}>
							Ocean Fund
						</h2>
					</a>
                    <a
						href="https://dune.com/0xpibs/modular-wallet"
						className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2 className={`text-2xl font-semibold`}>
							Modular Wallet
						</h2>
					</a>
				</div>
			</main>
		</>
	)
}