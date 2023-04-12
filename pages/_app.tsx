import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import bg from '../public/images/tile-background.png'

export default function App({ Component, pageProps }: AppProps) {
  return <Component  {...pageProps} />
}
