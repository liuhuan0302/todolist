import {
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
} from './module.js';

export const mainRouter = [{
  pathname: '/calculator',
  component: Calculator
},{
  pathname: '/count',
  component: Count
},{
  pathname: '/form',
  component: Form
},{
  pathname: '/themeButton',
  component: ThemeButton
},{
  pathname: '/context',
  component: Context
},{
  pathname: '/toDoList',
  component: ToDoList
},{
  pathname: '/reactRedux',
  component: ReactRedux
},{
  pathname: '/useReducer',
  component: UseReducer
},{
  pathname: '/textInputWithFocusButton',
  component: TextInputWithFocusButton
},{
  pathname: '/measureExample',
  component: MeasureExample
},{
  pathname: '/fancyInput',
  component: FancyInput
},{
  pathname: '/main',
  component: Main
}]