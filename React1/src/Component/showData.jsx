function Test()
{
    return<div>
        <h6>Hello this is TEST component</h6>
    </div>
}

function Form()
{
    return <div>
        <Test></Test><br/> 
        <h1></h1>
        <form id="loginForm" action="/submit" method="post">
    <label for="id">ID:</label>
    <input type="text" id="id" name="id" required/><br/><br/>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required/><br/><br/>

    <input type="submit" value="Submit"/>
        </form>
    </div>
}

export default Form
