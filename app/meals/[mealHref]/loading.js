import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Loading = () => {

    return (
        <SkeletonTheme baseColor="#1f2937" highlightColor="#374151">

            <Skeleton height={600} style={{ borderRadius: '16px' }} className='rounded-2xl mt-8' />

        </SkeletonTheme>
    )

}

export default Loading