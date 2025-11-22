import banner from '../assets/banner.jpg'
import Button from './Button';

export default function Banner(){
    const text = "Get 50% off on Selected items";

    return (
        <div className='w-[85%] h-85 relative flex justify-center mt-5'>
        <div className='absolute top-[30%] left-15 w-[50%]'>
            <div className='text-5xl font-bold mb-5'>
            {text}
            </div>
            <Button className='border-1 p-2 w-28 text-sm rounded-4xl hover:text-white hover:bg-[#222222] hover:border-black hover:cursor-pointer' text="Buy Now"/>
        </div>
        <div className='items-center rounded-4xl overflow-hidden'>
            <img src={banner} />
        </div>
        </div>
    )
}