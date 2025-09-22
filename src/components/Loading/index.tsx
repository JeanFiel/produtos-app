import styles from './styles.module.css';
export default function isLoading(){
    return(
        <>
        <div className={styles.root}>
            <h1>Carregando...</h1>
        </div>
        </>
    );
}