import "@/styles/global.css";

export const metadata = {
  title: "Full stack admin dashboard",
  describe:  "Full stack admin dashboard"
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>
            <div/>
        </div>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
