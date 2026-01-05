import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Photo Feed",
  description: "A photo feed app build with next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="container my-4 lg:my-8">{children}</div>
      </body>
    </html>
  );
}
