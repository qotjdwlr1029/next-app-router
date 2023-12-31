import "./globals.css";
import Navbar from "~/component/mainCategory/Navbar";
import Footer from "~/component/mainCategory/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="px-4 py-4">
          {props.children}
          {/* <div className="flex flex-row">
            <div className="w-2/4 border-black border-2 px-2 py-2 mx-2 my-2 rounded-lg">
              {props.info}
            </div>
            <div className="w-2/4 border-black border-2 px-2 py-2 mx-2 my-2 rounded-lg">
              {props.dashboard}
            </div>
          </div> */}
        </div>
        <Footer />
      </body>
    </html>
  );
}
