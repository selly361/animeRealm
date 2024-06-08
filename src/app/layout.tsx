import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import { PropsWithChildren } from 'react'
import { Hero } from '@/Components'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'AnimeRealm',
	description: 'Welcome to AnimeRealm - Your Ultimate Anime Destination!'
}

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
	return (
		<html lang='en'>
			<body className={dmSans.className}>
				<main className='max-w-7xl mx-auto bg-[#000]'>
					<Hero />
					{children}
				</main>
			</body>
		</html>
	)
}
