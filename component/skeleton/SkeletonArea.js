import styles from './skeleton.module.css';

export default function SkeletonArea( { children } ){
    return(
        <div className={styles.area}>{children}</div>
    )
}