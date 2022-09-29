import { AppProps } from 'next/app'
import '../styles/index.css'
import 'zenn-content-css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
