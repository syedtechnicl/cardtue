"use client";

import { Provider } from "react-redux";
import Nav from "./Components/Nav";
import { store } from "./Redux/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Nav />
          {children}
        </Provider>
      </body>
    </html>
  );
}
