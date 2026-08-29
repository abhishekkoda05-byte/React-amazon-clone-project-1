  function Signin({setsignin}) {
  return (
   <>
   <div className="signin-popup">
    <div className="signin-box">
        <h2 className="sign-text-1">sign in or create account </h2>
        <h3 className="sign-text3">entre ypur mobile number </h3>
        <input placeholder="" type="text" className="signin-imput"/>
        <button className="close-signin" onClick={() => setsignin(false)}>continue</button>
        <h3 className="sign-text2">by continuing, you agree to Amazon's <a>conditions of use</a>and<a>privacy policy</a></h3>

        <a>Need help!</a>
    </div>
   </div>
   </>
  );
}

export default Signin