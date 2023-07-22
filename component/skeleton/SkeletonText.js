import styles from './skeleton.module.css';
import SkeletonArea from './SkeletonArea';
import SkeletonContent from './SkeletonContent';
import SkeletonTitle from './SkeletonTitle';
import SlideBar from './SlideBar';

export default function SkeletonText(){
    return(
        <SkeletonArea>
            <div>
                <SkeletonTitle/>
                <SkeletonContent/>
            </div>
            <SlideBar/>
        </SkeletonArea>
    )
}