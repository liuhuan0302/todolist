import './App.css';
import Calculator from './pages/calculator';
import Count from '../src/pages/count/count';
import Form from '../src/pages/hook/hook';
import ThemeButton from '../src/pages/hook/context'
import Context from './pages/context/index';
import ToDoList from '../src/pages/redux/todolist';
import ReactRedux from '../src/pages/react-redux/index';
import UseReducer from '../src/pages/hook/useReducer';
import TextInputWithFocusButton from '../src/pages/hook/useRef';
import MeasureExample from '../src/pages/hook/measureExample';
import FancyInput from '../src/pages/hook/useImperativeHandle';
import Main from '../src/pages/component/main';
function App() {
  return (
    <div className="App">
      <Calculator />
      <br />
      <Count />
      <br />
      <Form />
      <br />
      <ThemeButton />
      <br/>
      <Context />
      <br/>
      <ToDoList />
      <br />
      <ReactRedux />
      <br />
      <UseReducer />
      <br />
      <TextInputWithFocusButton />
      <br />
      < MeasureExample />
      <br />
      <FancyInput />
      <br />
      <Main />
    </div>
  );
}

export default App;
