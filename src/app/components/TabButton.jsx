import { motion } from "framer-motion";

const variants = {
  default: {width: 0},
  active: {width: "calc(100% - 0.75rem)"}
}

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text=[#ADB7BE] border-b-2 border-[#121212]"
  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
            {children}
        </p>
        <motion.div
          variants={variants}
          animate={active ? "active" : "default"}
          className="h-[2px] bg-purple-500 mt-1 mr-3"
        >
        </motion.div>
    </button>
  )
}

export default TabButton