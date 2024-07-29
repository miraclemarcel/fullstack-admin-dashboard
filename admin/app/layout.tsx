import "@/styles/global.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Full stack admin dashboard",
  describe: "Full stack admin dashboard"
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <div>
            <div />
        </div>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
