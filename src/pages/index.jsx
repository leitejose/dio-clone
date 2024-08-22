import {useState, useEffect} from 'react';

// import { Container } from './styles';

const Teste = () => {

    const [name, setName] = useState('José');

    const handleChangeName =() =>{
        setName(prev => prev === 'Joao' ? 'José' :  'Joao');


    } 
    useEffect(()=>{
        alert('Renderizei')
        return ()  => {
            alert('Desmontei')
            }

    },[name])
    return(
        <div>
            <p>
                {name}  
            </p>
            <button onClick={handleChangeName}>Alterar</button>
        </div>
    )
}

export {Teste};