import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Loading = () => {
    return (
        <>
            <div className='block dark:hidden'>
                <SkeletonTheme className="hidden" baseColor="#fff" highlightColor="#f1f5f9">
                    <Skeleton height={43} style={{ borderRadius: '16px' }} className='rounded-2xl mt-8' />

                    <Skeleton height={600} style={{ borderRadius: '16px' }} className='rounded-2xl mt-8' />

                    <div className='flex items-center justify-center mt-8 mx-4 gap-x-4'>
                        <span className='flex-1 h-px bg-white'></span>
                        <Skeleton height={25} width={125}></Skeleton>
                        <span className='flex-1 h-px bg-white'></span>
                    </div>

                    <div className='grid md:hidden grid-cols-2  gap-x-2 mt-8'>
                        <Skeleton className='h-[400px]' style={{ borderRadius: '16px' }} />
                        <Skeleton className='h-[400px]' style={{ borderRadius: '16px' }} />
                    </div>
                    <div className='hidden md:grid lg:hidden grid-cols-3  gap-x-2 mt-8'>
                        <Skeleton className='h-[430px]' style={{ borderRadius: '16px' }} />
                        <Skeleton className='h-[430px]' style={{ borderRadius: '16px' }} />
                        <Skeleton className='h-[430px]' style={{ borderRadius: '16px' }} />
                    </div>
                    <div className='hidden lg:grid grid-cols-4 gap-x-2 mt-8'>
                        <Skeleton className='h-[460px]' style={{ borderRadius: '16px' }} />
                        <Skeleton className='h-[460px]' style={{ borderRadius: '16px' }} />
                        <Skeleton className='h-[460px]' style={{ borderRadius: '16px' }} />
                        <Skeleton className='h-[460px]' style={{ borderRadius: '16px' }} />
                    </div>
                </SkeletonTheme>
            </div>
            <div className='hidden dark:block'>

                <SkeletonTheme baseColor="#1f2937" highlightColor="#374151">
                    <Skeleton height={43} style={{ borderRadius: '16px' }} className='rounded-2xl mt-8' />

                    <Skeleton height={600} style={{ borderRadius: '16px' }} className='rounded-2xl mt-8' />

                    <div className='flex items-center justify-center mt-8 mx-4 gap-x-4'>
                        <span className='flex-1 h-px bg-gray-800'></span>
                        <Skeleton height={25} width={125}></Skeleton>
                        <span className='flex-1 h-px bg-gray-800'></span>
                    </div>

                    <div className='grid md:hidden grid-cols-2  gap-x-2 mt-8'>
                        <Skeleton className='h-[400px]' style={{ borderRadius: '16px' }} />
                        <Skeleton className='h-[400px]' style={{ borderRadius: '16px' }} />
                    </div>
                    <div className='hidden md:grid lg:hidden grid-cols-3  gap-x-2 mt-8'>
                        <Skeleton className='h-[430px]' style={{ borderRadius: '16px' }} />
                        <Skeleton className='h-[430px]' style={{ borderRadius: '16px' }} />
                        <Skeleton className='h-[430px]' style={{ borderRadius: '16px' }} />
                    </div>
                    <div className='hidden lg:grid grid-cols-4 gap-x-2 mt-8'>
                        <Skeleton className='h-[460px]' style={{ borderRadius: '16px' }} />
                        <Skeleton className='h-[460px]' style={{ borderRadius: '16px' }} />
                        <Skeleton className='h-[460px]' style={{ borderRadius: '16px' }} />
                        <Skeleton className='h-[460px]' style={{ borderRadius: '16px' }} />
                    </div>
                </SkeletonTheme>
            </div>

        </>
    )
}

export default Loading