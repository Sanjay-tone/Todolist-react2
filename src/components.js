import { useState } from "react"
import { motion } from "framer-motion"; // Import Framer Motion
import one from "./asset/image/one.svg"

function Components() {

    const [list, setlist] = useState([{ id: 1, activity: "AUDI" }, { id: 2, activity: "PORSCHE" }])
    const [newitem, setnewtitem] = useState("")

    function handledelete(removeid) {
        var temparr = list.filter(function (item) {
            if (item.id == removeid) {
                return false
            }
            else {
                return true
            }
        })
        setlist(temparr)
    }



    const handlechange = (evt) => {
        setnewtitem(evt.target.value)
    }

    const addelement = () => {
        setlist([...list, { id: list.length + 1, activity: newitem }])
    }

    const handlereset = () => {
        setnewtitem("")
    }



    return (
        <>
            <section className="group">

                <motion.div
                    className="code_img"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.img
                        src={one}
                        id="img"
                        alt="coding"
                        whileHover={{ scale: 1.1, rotate: 5 }} // Slight zoom and tilt on hover
                        whileTap={{ scale: 0.9 }} // Shrinks slightly when clicked
                        transition={{ type: "spring", stiffness: 200 }}
                    />
                </motion.div>

                <div className="group_1">
                    <motion.h2
                        className="group_1_title"
                        initial={{ opacity: 0, y: -20 }} // Start hidden and move down
                        animate={{
                            opacity: [0.5, 1, 0.5], // Opacity pulsates
                            y: [-5, 0, -5] // Slight up and down movement
                        }}
                        transition={{
                            duration: 2, // Duration of one cycle
                            repeat: Infinity, // Loop animation infinitely
                            repeatType: "reverse", // Moves back and forth smoothly
                            ease: "easeInOut"
                        }}
                        whileHover={{ scale: 1.1, rotate: 3 }} // Interactive hover effect
                    >
                        TO DO LIST CONTAINER
                    </motion.h2>
                    <hr id="hr"></hr>



                    <input id="input" value={newitem} onChange={handlechange} placeholder="Enter your to-do list"></input>
                    <button id="btn" onClick={addelement}>ADD</button>
                    <button id="btn1" onClick={handlereset}>RESET</button>

                    {/* Animated List Container */}


                    <motion.ul className="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>

                        {list.map(function (item) {
                            return <motion.li
                                key={item.id}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 20, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >



                                {item.activity}

                                <button id="btn2" onClick={() => { handledelete(item.id) }}>DELETE</button>

                            </motion.li>
                        })
                        }
                    </motion.ul>
                </div>

            </section>



        </>
    )
}


export default Components