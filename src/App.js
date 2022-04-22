import GlobalStyle from './styles/global'
import toast, { Toaster } from 'react-hot-toast'
import Routes from './routes';

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ className: "", style: {} }}
      />
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
