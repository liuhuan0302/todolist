import Loadable from 'react-loadable';
import Loading from '../src/pages/Loading/loading';

const Calculator = Loadable({
  loader: () => import('../src/pages/calculator'),
  loading: Loading
})
const Count = Loadable({
  loader: () => import('../src/pages/count/count'),
  loading: Loading
})
const Form = Loadable({
  loader: () => import('../src/pages/hook/hook'),
  loading: Loading
})
const ThemeButton = Loadable({
  loader: () => import('../src/pages/hook/context'),
  loading: Loading
})
const Context = Loadable({
  loader: () => import('../src/pages/context/index'),
  loading: Loading
})
const ToDoList = Loadable({
  loader: () => import('../src/pages/redux/todolist'),
  loading: Loading
})
const ReactRedux = Loadable({
  loader: () => import('../src/pages/react-redux/index'),
  loading: Loading
})
const UseReducer = Loadable({
  loader: () => import('../src/pages/hook/useReducer'),
  loading: Loading
})
const TextInputWithFocusButton = Loadable({
  loader: () => import('../src/pages/hook/useRef'),
  loading: Loading
})
const MeasureExample = Loadable({
  loader: () => import('../src/pages/hook/measureExample'),
  loading: Loading
})
const FancyInput = Loadable({
  loader: () => import('../src/pages/hook/useImperativeHandle'),
  loading: Loading
})
const Main = Loadable({
  loader: () => import('../src/pages/component/main'),
  loading: Loading
})

export {
  Calculator,
  Count,
  Form,
  ThemeButton,
  Context,
  ToDoList,
  ReactRedux,
  UseReducer,
  TextInputWithFocusButton,
  MeasureExample,
  FancyInput,
  Main
}