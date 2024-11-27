import {React, useState} from 'react';
import axios from 'axios';


function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/auth/login', { email, password });
            console.log(response.data);
            // Redirecionar para a tela de login ou exibir uma mensagem de sucesso
            window.alert('Login realizado com sucesso');
        } catch (error) {
            console.error(error);
            setError('Erro ao fazer login');
        };
    };
    
        return (
            <div>
                <h2>Login</h2>
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
                    <button type="submit">Entrar</button>
                </form>
                {error && <p>{error}</p>}
            </div>
        );
}

export default LoginForm;
