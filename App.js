
import './App.css';
import SignUp from './Compo/Signup';
import SignIn from './Compo/SignIn';
import Home from './Compo/Home';
function App() {
  return (
    <div className="App">
      <>
      <Home>Home</Home>
      <SignUp>Signup</SignUp>
      <SignIn>SignIn</SignIn>
      </>  
    </div>
  );
}

export default App;
