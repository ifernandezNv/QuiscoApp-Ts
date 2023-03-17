import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QuioscoProvider } from 'context/QuioscoProvider'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <QuioscoProvider>
      <Component {...pageProps} />
    </QuioscoProvider>
  )
}
