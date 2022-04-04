import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="form-wrapper">
      <div className="section-left">
        <h1>Learn to code by <br/>watching others </h1>
        <p>
          See how experienced developers solve problems in real-time. <br/> Watching
          scripted tutorials is great, but understanding how <br/> developers think is
          invaluable.
        </p>
      </div>
      <div className="section-right">
        
        <button className="btn-try-it-free">
          <span className="btn-try-it-free-bold">Try it free 7 days</span> then $20/mo. thereafter 
        </button>
       
        <div className="form-secton">
            <form id="form">
              <div>
                <input type="text" className="first-name" placeholder="First Name" id="fname"></input>
              </div>
              <div>
                <input type="text" className="last-name" placeholder="Last Name" id="lname"></input>
              </div>
              <div>
                <input type="email" className="email" placeholder="Email Address" id="email"></input>
              </div>
              <div>
                <input type="password" className="password" placeholder="Password" id="password"></input>
              </div>

              <button className="claim-trial">Claim your free trial</button>
              <p>By clicking the button, you are agreeing to our 
              <span className="terms-and-services">Terms and Services</span>
              </p>
            </form>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
