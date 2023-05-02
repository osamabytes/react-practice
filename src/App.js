import './App.css';
const UserTest = {
  firstName: "Osama",
  lastName: "Ahmad"
};
function formatUserName(user){
  return `${user.firstName} ${user.lastName}`;
}
function getGreeting(user){
  if(user){
    return <h1>Hello, {formatUserName(user)}!</h1>
  }
  return <h1>Hello, Stranger.</h1>
}
function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <img src="" alt="" />
    <div className="container">
      <h1>{getGreeting()}</h1>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae voluptates, cumque distinctio maxime corrupti temporibus hic nulla explicabo. Dolorum praesentium ea, beatae nisi voluptates expedita itaque harum impedit amet. Vero facilis provident illo enim.
    </div>
    </>
  );
}

export default App;
