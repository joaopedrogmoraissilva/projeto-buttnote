import React, {useState} from "react";
import axios from "axios";

function SignupForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/auth/signup", { email, password, username });
            console.log(response.data);
            // Redirecionar para a tela de login ou exibir uma mensagem de sucesso
            window.location.href = "/login";
        } catch (error) {
            console.error(error);
            setError("Erro ao realizar o cadastro");
        }
    };

    return (
        <div>
            <h2>Cadastro</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
}

export default SignupForm;