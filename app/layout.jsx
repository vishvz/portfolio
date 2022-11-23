import Header from "../ui/header";
import "../styles/global.css";
import Footer from "../ui/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Vishvajeet's Portfolio</title>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
