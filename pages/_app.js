import "@/styles/tailwind.css";
import localFont from 'next/font/local'

export const MediumLL = localFont({
  src: [
    {
      path: '../public/fonts/MediumLLWeb-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/MediumLLWeb-Bold.woff2',
      weight: '700',
      style: 'bold',
    }
  ],
  subsets: ['latin'],
  variable: '--font-MediumLL',
})

export default function App({ Component, pageProps }) {
  return (
    <div className={`${MediumLL.variable} font-mediumLL antialiased tracking-tight text-base`}>
      <Component {...pageProps} />
    </div>
  );
}
