import './App.css';
// import Aboutus from './Components/Aboutus';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText="About Us" />
    <div className="container my-3">
      <TextForm heading="Enter the Text to Analyze below" />
      {/* <Aboutus /> */}
    </div>
    </>
  );
}

export default App;
