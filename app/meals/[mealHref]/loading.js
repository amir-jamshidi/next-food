import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Loading = () => {

    return (
        <SkeletonTheme baseColor="#1f2937" highlightColor="#374151">

            <Skeleton height={600} style={{ borderRadius: '16px' }} className='rounded-2xl mt-8' />

            <div className='flex items-center justify-center mt-8 mx-4 gap-x-4'>
                <span className='flex-1 h-px bg-gray-800'></span>
                <Skeleton height={25} width={125}></Skeleton>
                <span className='flex-1 h-px bg-gray-800'></span>
            </div>

            <div className='grid grid-cols-4 gap-x-2 mt-8'>
                <Skeleton style={{ borderRadius: '16px' }} height={445} />
                <Skeleton style={{ borderRadius: '16px' }} height={445} />
                <Skeleton style={{ borderRadius: '16px' }} height={445} />
                <Skeleton style={{ borderRadius: '16px' }} height={445} />

            </div>

        </SkeletonTheme>
    )

}

export default Loading