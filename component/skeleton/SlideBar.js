import LoadingBar from './Loadingbar';
import styles from './skeleton.module.css';

export default function SlideBar(){
    return (
        <div className={styles.bar}>
            <LoadingBar/>
        </div>
    )
}