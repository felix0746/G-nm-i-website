import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: '甘妹弄堂',
  description: '傳承三代的好味道，甘妹弄堂。',
  verification: {
    google: 'wry9ix6DEHAyH4l-rcrpVhbVGC8mXgO_hFMEOj412BI',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
