import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpressionForm from './components/ExpressionForm';

function App() {
  return (
    <div className='app'>
    <h1 className="text-center mt-4">Expression Engine UI</h1>
    <ExpressionForm />
  </div>
  );
}

export default App;
