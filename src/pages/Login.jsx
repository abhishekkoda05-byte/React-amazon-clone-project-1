 function Login({ setlogin }) {
  return (
   <>
   <div className="login-popup">
    <div className="login-box">
        <h2 className="delivery-text">choose your location</h2>
        <button className="delivery-btn">sign in to your adresses</button>
          <h3 >or entre a us zip code</h3>

       <div className="code">
           <input placeholder="" type="text" className="delivery-input"/>
          <button className="code-btn">Apply</button>
       </div>
       <h3>or ship outside the us</h3>
       <select>
        <option>America</option>
        <option>india</option>
       </select>
       <button className="delivery-done" onClick={
        () => setlogin(false)
       }>done</button>
    </div>

   </div>
   </>
  );
}

export default Login