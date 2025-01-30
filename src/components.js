import { useState } from "react"
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

    const handlereset = ()=>
    {
        setnewtitem("")
    }



    return (
        <>
            <section className="group">

                <div className="code_img">
                    <img src={one} id="img" alt="coding" />
                </div>

                <div className="group_1">
                    <h2 className="group_1_title">TO DO LIST CONTAINER</h2>
                    <hr id="hr"></hr>
            


                    <input id="input" value={newitem} onChange={handlechange} placeholder="Enter your to-do list"></input>
                    <button id="btn" onClick={addelement}>ADD</button>
                    <button id="btn1" onClick={handlereset}>RESET</button>

                    <ul className="list">
                        {
                            list.map(function (item) {
                                return <li>{item.activity} <button id="btn2" onClick={() => { handledelete(item.id) }}>DELETE</button>  </li>
                            })
                        }
                    </ul>
                </div>

            </section>



        </>
    )
}


export default Components