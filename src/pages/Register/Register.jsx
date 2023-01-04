
import { useState } from "react"


const Register = () => {

  const[name, SetName] = useState("");
  const[email, SetEmail] = useState("");
  const[password, SetPassword] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault()

    const user ={
      name,
      email,
      password
    }

    console.log(user)
  }

    return(
      <div>
        <h2>Registresse aqui</h2>

        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome: </span>
            <input
             type="text"
             placeholder="digite seu nome"
             value={name}
             onChange={(e)=>SetName(e.target.value)}
             />
          </label>

          <label>
            <span>E-mail: </span>
            <input
             type="email"
             placeholder="digite seu email"
             value={email}
             onChange={(e)=>SetEmail(e.target.value)}
             />
          </label>

          <label>
            <span>Senha: </span>
            <input
             type="password"
             placeholder="digite sua senha"
             value={password}
             onChange={(e)=>SetPassword(e.target.value)}
             />
          </label>

          <button className="btn">Cadastrar</button>
        </form>
      </div>
    )  


}

export default Register