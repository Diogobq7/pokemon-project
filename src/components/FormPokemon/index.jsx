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
                        placeholder="Nome do Pokémon"
                        value={pokemon.nome}
                        onChange={(e) => handleInputChange('nome', e.target.value)}
                        className={styles.input}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <input 
                        type="text" 
                        placeholder="Tipo do Pokémon"
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
                        placeholder="Poder do Pokémon"
                        value={pokemon.poder}
                        onChange={(e) => handleInputChange('poder', e.target.value)}
                        className={styles.input}
                    />
                </div>
                <button type="submit" className={styles.submit}>
                    Cadastrar Pokémon
                </button>
            </form>
        </div>
    )
}