import { Inter } from 'next/font/google'
import '../app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function Dune() {
	return (
		<>
			<main className="flex min-h-screen flex-col items-center p-24">
                <div className="z-10 max-w-5xl w-full items-center font-mono text-sm lg:flex mb-2">
                    <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                        Dashboards I&apos;ve made
                    </p>
                </div>
				<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
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