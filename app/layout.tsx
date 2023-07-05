import AuthContext from './context/AuthContext'
import ToasterContext from './context/ToasterContext'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Messenger Clone',
	description: 'Messenger Clone description',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<AuthContext>
					<ToasterContext />
					{children}
				</AuthContext>
			</body>
		</html>
	)
}
