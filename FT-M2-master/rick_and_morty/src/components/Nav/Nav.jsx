import SearchBar from '../SearchBar.jsx';
import style from './Nav.module.css';


export default function Nav(props) {
    return (
        <>
            <img src='https://th.bing.com/th?id=OIP.iEHAd_zhmADQxa_CH-8N-wHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' />
            <SearchBar onSearch={props.onSearch} />
        </>
        )
}