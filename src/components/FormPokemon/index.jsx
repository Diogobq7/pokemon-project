import { useState, useEffect } from 'react';
import styles from './styles.module.css';

export default function FormPokemon() {
    const [pokemon, setPokemon] = useState({
        nome: '',
        tipo: '',
        descricao: '',
        poder: '',
    });

    const [pokemonList, setPokemonList] = useState([]);

    const handleInputChange = (field, value) => {
        setPokemon({
            ...pokemon,
            [field]: value
        })
    };

    useEffect(() => {
        if (pokemonList.length > 0)
            console.log('Lista atualizada:', pokemonList);
    }, [pokemonList]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Mensagens de erro se algum campo obrigatório ficar vazio
        const camposVazios = [];
        
        if (!pokemon.nome.trim()) {
            camposVazios.push("Nome");
        }
        
        if (!pokemon.tipo.trim()) {
            camposVazios.push("Tipo");
        }
        
        if (!pokemon.poder.trim()) {
            camposVazios.push("Poder");
        }
        
        if (camposVazios.length > 0) {
            const mensagem = camposVazios.length === 1
                ? `O seguinte campo obrigatório não foi preenchido:\n- ${camposVazios[0]}`
                : `Os seguintes campos obrigatórios não foram preenchidos:\n- ${camposVazios.join('\n- ')}`;
            
            alert(mensagem);
            return;
        }
        
        setPokemonList([...pokemonList, pokemon]);
        alert("Pokemon cadastrado com sucesso!");
        handleInputReset();
    }

    const handleInputReset = () => {
        setPokemon({
            nome: '',
            tipo: '',
            descricao: '',
            poder: '',
        })
    }

    return (
        <div className={styles.formContainer}>
            <h1 className={styles.formTitle}>Cadastro de Pokémons</h1>
            <form className={styles.pokemonForm} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                    <input 
                        type="text"
                        placeholder="Nome do Pokémon *"
                        value={pokemon.nome}
                        onChange={(e) => handleInputChange('nome', e.target.value)}
                        className={styles.input}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <input 
                        type="text" 
                        placeholder="Tipo do Pokémon *"
                        value={pokemon.tipo} 
                        onChange={(e) => handleInputChange('tipo', e.target.value)}
                        className={styles.input}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <textarea 
                        placeholder="Descrição do Pokémon"
                        value={pokemon.descricao}
                        onChange={(e) => handleInputChange('descricao', e.target.value)}
                        className={styles.formTextArea}
                        rows="3"
                    />
                </div>
                <div className={styles.inputGroup}>
                    <input 
                        type="text" 
                        placeholder="Poder do Pokémon *"
                        value={pokemon.poder}
                        onChange={(e) => handleInputChange('poder', e.target.value)}
                        className={styles.input}
                    />
                </div>
                <button type="submit" className={styles.submit}>
                    Cadastrar Pokémon
                </button>
            </form>
            
            <div className={styles.pokemonListContainer}>
                <h2>Lista dos Pokémons cadastrados ({pokemonList.length})</h2>
                <div className={styles.pokemonList}>
                    {pokemonList.map((poke, index) => (
                        <div key={index} className={styles.pokemonCard}>
                            <h3 className={styles.pokemonName}>{poke.nome}</h3>
                            <p><strong>Tipo:</strong> {poke.tipo}</p>
                            <p><strong>Poder:</strong> {poke.poder}</p>
                            {poke.descricao && (
                                <p className={styles.pokemonDescription}><strong>Descrição:</strong> {poke.descricao}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    )
}