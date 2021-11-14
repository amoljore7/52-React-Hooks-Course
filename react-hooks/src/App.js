import "./App.css";
import EffectTutorial from "./UseEffect/EffectTutorial";
import LayoutEffectTutorial from "./UseLayoutEffect/LayoutEffectTutorial";
import ReducerTutorial from "./UseReducer/ReducerTutorial";
import StateTutorial from "./UseState/StateTutorial";
import ContextTutorial from "./UseContext/ContextTutorial";
import ImperativeHandle from "./UseImperativeHandle/ImperativeHandle";
import RefTutorial from "./UseRef/RefTutorial";
import MemoTutorial from "./UseMemo/MemoTutorial";
import CallBackTutorial from "./UseCallback/CallbackTutorial";

function App() {
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <hr />
      <h3>Effect Tutorial</h3>
      <EffectTutorial />
      <hr />
      <h3>Layout Effect Tutorial</h3>
      <LayoutEffectTutorial />
      <hr />
      <h3>Reducer Tutorial</h3>
      <ReducerTutorial />
      <hr />
      <h3>State Tutorial</h3>
      <StateTutorial />
      <hr />
      <h3>Context Tutorial</h3>
      <ContextTutorial />
      <hr />
      <h3>Imperative Handle</h3>
      <ImperativeHandle />
      <hr />
      <h3>Ref Tutorial</h3>
      <RefTutorial />
      <hr />
      <h3>Memo Tutorial</h3>
      <MemoTutorial />
      <hr />
      <h3>CallBack Tutorial</h3>
      <CallBackTutorial />
      <hr />
    </div>
  );
}

export default App;
