import '@/styles/globals.css';
import Navbar from '../components/Navbar.jsx';
import { Toaster } from 'react-hot-toast';
import { UserContext } from '../lib/context.js';

export default function App({ Component, pageProps }) {
  return (
    <>
      <UserContext.Provider value={{ user: {}, username: 'jeff' }}>
        <Navbar />
        <Component {...pageProps} />
        <Toaster />
      </UserContext.Provider>
    </>
  )
}
