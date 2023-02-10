import Header from '../components/Header';
import '../styles/globals.css';
import Providers from './Providers';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>


          {/* Header */}
          <Header />

          {/* NavBar */}

          {/* Search Box */}

          {children}

          {/* Footer */}
        </Providers>
      </body>
    </html>
  )
}
