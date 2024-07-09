import MainHeader from '@/components/main-header/main-header';
import './globals.css';
import MainHeaderBG from '@/components/main-header/main-header-bg';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <MainHeaderBG />
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
