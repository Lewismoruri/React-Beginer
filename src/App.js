import './App.css';

function App() {
  const Job = (props) => {
    return (
      <div>
        <h2>{props.salary}</h2>
        <h3>{props.age}</h3>
        <h4>{props.position}</h4>
        <h5>{props.company}</h5>
        
      </div>
    );
  };

 
  return (
    <div className="App">
     <p><Job salary={90000}  position="Senior SDE" company="Amazon"/></p> 
      <p><Job salary={12000}  position="Junior SDE" company="Alibaba"/></p>
      <p><Job salary={10000} position="Project Manager" company="Netflix"/></p>
    </div>
  );
}

export default App;
