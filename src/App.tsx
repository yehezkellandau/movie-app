import './App.css'
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
     <Router/>
     </QueryClientProvider>
    </>
  )
}

export default App
