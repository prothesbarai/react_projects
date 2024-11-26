import { useState } from "react"

export default function ToolsProjects() {

    const [value,setValue] = useState(0)
    const increase = () =>{
        let num = value+10
        setValue(num)
    }

    const decrease = () =>{
        if(value>0){
            let num2 = value -10;
            setValue(num2)
        }
    }

    return (
        <div>
            <main className="vh-100 align-items-center text-center align-content-center">
                <div>
                    <p className="fw-bold fs-1">{value}</p>
                </div>
                <button className="btn btn-outline-primary" onClick={increase}>Increase</button>
                <button className="btn btn-outline-primary mx-5">Tools Projects</button>
                <button className="btn btn-outline-primary" onClick={decrease}>Decrease</button>
            </main>
        </div>
    )
}
