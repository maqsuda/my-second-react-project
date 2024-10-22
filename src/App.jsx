import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';

function App() {

  function handleClick() {
    alert("Click Me");
  }

  const handleClick2 = () => {
    alert('Click me');
  }

  const addToFive = (num) => alert(num + 5);

  return (
    <>
      <h3>React Second Projects</h3>
      <Friends></Friends>



      {/* <Users></Users>
      <Team></Team>

      <Counter></Counter> */}

      <button onClick={handleClick}>Click me1</button>
      <button onClick={handleClick2}>Click me2</button>
      <button onClick={() => alert('click me')}>Click me3</button>
      <button onClick={() => addToFive(3)}>Click me4</button>
    </>
  )
}

export default App
