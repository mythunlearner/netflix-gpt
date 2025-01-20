
import './App.css';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import MainContent from './components/MainContent'; // Ensure this path matches your folder structure

function App() {
  return (
    <Provider store={appStore}>
      <MainContent />
    </Provider>
  );
}

export default App;
