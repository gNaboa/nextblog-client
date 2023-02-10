
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { UserContextProvider } from '../context/UserContext'
import '../style/global.scss'
function MyApp({ Component, pageProps }: AppProps) {
  return(
  <> 
   <UserContextProvider>
      <Header/>
      <Component {...pageProps} />
    </UserContextProvider>
   </>
  )
}

export default MyApp
