import './loader.css'

export const Loader = ({ message }) => {

    return (
        <div>
            <div className='loader'></div>
            <p>{message}</p>
        </div>
    );
}

export default Loader;