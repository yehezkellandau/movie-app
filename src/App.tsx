import './App.css'
import AuthContextProvider from './context/AuthContext';
import FavoriteMoviesContextProvider from './context/FavoriteMoviesContext';
import Router from './router'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <AuthContextProvider>
    <FavoriteMoviesContextProvider>
     <Router/>
     </FavoriteMoviesContextProvider>
     </AuthContextProvider>
     </QueryClientProvider>
    </>
  )
}

export default App
