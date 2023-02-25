import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QuiscoProvider } from 'context/QuiscoProvider'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <QuiscoProvider>
      <Component {...pageProps} />
    </QuiscoProvider>
  )
}
