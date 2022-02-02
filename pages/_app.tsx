import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, NextUIProvider } from '@nextui-org/react';

function MyApp({ Component, pageProps }: AppProps) {
  const lightRetroTheme = createTheme({
    type: 'light',
    className: 'light-retro',
    theme: {
      colors: {
        primary: '#FFD34E',
        primaryLight: 'transparent',
        error: '#EE457E'
      }
    }
  });


  return(
  <NextUIProvider theme={lightRetroTheme}>
    <Component {...pageProps}/>
  </NextUIProvider>
  )
}

export default MyApp
