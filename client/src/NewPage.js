import {React} from 'react';

function NewPage() {
    return (
        <div>
            <h1>Buttnote</h1>
            <p class="font-sans hover:font-serif">Entre e compartilhe suas notas na rede!</p>
            <a href="/register">Criar uma conta</a>
            <a href="/login">Entrar</a>
        </div>
    );
}
export default NewPage;