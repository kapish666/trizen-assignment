import banner from '../assets/banner.jpg'
import Button from './Button';

export default function Banner(){
    const text = "Get 50% off on Selected items";

    return (
        <div className='md:w-[85%] sm:w-full md:h-2/12 sm:h-full relative flex justify-center mt-5'>
        <div className='absolute top-[30%] left-15 w-[50%]'>
            <div className='md:text-5xl sm:text-xl font-bold sm:mb-1 md:mb-5'>
            {text}
            </div>
            <Button className='border-1 sm:p-2 md:p-2 md:w-28 md:text-sm rounded-4xl hover:text-white hover:bg-[#222222] hover:border-black hover:cursor-pointer' text="Buy Now"/>
        </div>
        <div className='items-center rounded-4xl overflow-hidden'>
            <img src={banner} />
        </div>
        </div>
    )
}