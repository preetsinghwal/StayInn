import Logo from "./components/Logo"
import Navigation from "./components/Navigation"

export const metadata = {
  title: "Stay Inn"
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copyright by StayInn @2025</footer>
      </body>
    </html>
  )
}
