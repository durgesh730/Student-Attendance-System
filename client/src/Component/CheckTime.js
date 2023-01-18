import React, { useEffect, useState } from 'react'
import '../App.css';


export default function CheckTime() {

    const [inval, setVal] = useState({})
    const [note, setNote] = useState()

    useEffect(() => {
        // console.log(note)
        // console.log("ans " , note)
    }, [note])

    const setval = (e) => {
        const { name, value } = e.target

        setVal(() => {
            return {
                ...inval,
                [name]: value
            }
        })
    }

    const handaleSubmit = async (e) => {
        e.preventDefault();
        const { rollnumber } = inval
        if (rollnumber === "") {
            alert("hii bdhjdjcvbnm")
        }
        else {
            const data = await fetch(`http://localhost:5000/durgesh/getTime/${rollnumber} `, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                },
            })
            const res = await data.json();
            setNote(res)
        }
    }

    return (
        <>
            <form className='container'>
                <div className='student' >
                    <h3 className='text-center'>Check Student TimeIn and Out From a class</h3><hr></hr>
                    <div className="mb-3  col-8 my-4">
                        <label htmFor="rollnumber" className="form-label">Enter Roll Number</label>
                        <input type="rollnumber" className="form-control" value={inval.rollnumber} onChange={setval} id="rollnumber" name='rollnumber' aria-describedby="emailHelp" placeholder='Roll number' />
                    </div>
                    <div className='text-center my-4 ' >
                        <button type="submit" onClick={handaleSubmit} className="btn">Submit</button>
                    </div>
                </div>
            </form>

            <div className='conatiner '>
                <div className='text-center'> 
                { note?.map((not) => {
                        return (<div className='show'>In at {not.checkin}</div>)
                    })}
                </div>

                <div className='text-center'>{
                    note?.map((not) => {
                        return (<div className='show'>Out to {not.checkout}</div>)
                    })}
                </div>
             </div>

        </>
    );
}
