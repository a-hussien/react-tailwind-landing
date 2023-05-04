import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { HiArrowLongLeft } from 'react-icons/hi2'

const NotFound = () => {
    return (
        <div className="h-screen bg-slate-500 flex flex-col items-center justify-center">
            <motion.div 
            className='w-1/2 flex flex-col items-center justify-center p-8 mx-auto shadow-lg rounded-lg bg-slate-200'
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            >
                <h2 className='text-4xl tracking-wide'>
                    <span className='text-[3rem] font-mono font-bold text-red-600 mr-2'>404</span> 
                    <span className='text-slate-700'>Page Not Found</span>
                </h2>
                <p className='inline-flex mt-8 uppercase'>
                    <HiArrowLongLeft className="mx-1 w-6 h-6 text-indigo-400"/>
                    Back to 
                    <Link to="/" className='mx-1 font-semibold text-indigo-500'>Home</Link> page 
                </p>
            </motion.div>
        </div>
    )
}

export default NotFound