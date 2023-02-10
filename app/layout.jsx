import Header from '../components/Header';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import Providers from './Providers';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='dark:bg-gray-500 dark:text-gray-200 text-gray-700 transition-colors duration-300 min-h-screen select-none'>
        <Providers>


          {/* Header */}
          <Header />

          {/* NavBar */}
          <Navbar />

          {/* Search Box */}

          {children}

          {/* Footer */}
        </Providers>
      </body>
    </html>
  )
}
