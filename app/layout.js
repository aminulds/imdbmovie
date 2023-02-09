import Header from '../components/Header';
import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <Header />

        {/* NavBar */}

        {/* Search Box */}

        {children}

        {/* Footer */}
      </body>
    </html>
  )
}
