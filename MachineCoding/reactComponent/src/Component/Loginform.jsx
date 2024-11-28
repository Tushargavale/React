
function LoginForm(){







    return(<>
      <div className="container">
       <label className="loginLabel">Login Form</label>
        <form>
          <div className="inputfield">
            <label>UserName : </label>
            <input type="text" placeholder="username" />
            <label>Password :</label>
            <input type="password" placeholder="password" />
          </div>
          <div className="button">
            <button>submit</button>
          </div>
        </form>
      </div>
 </>)
}

export default LoginForm