import React, { useState } from 'react'
import '../App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Main = () => {

    const [inval, setVal] = useState({ rollnumber: "", Subject: "" })

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
        const { Subject, rollnumber } = inval

        if (rollnumber === "") {
            toast("Roll Number is Required", {
                autoClose: 2000,
            })
        } else if (Subject === "") {
            toast("Name is Required", {
                autoClose: 2000,
            })
        } else {

            const data = await fetch('http://localhost:5000/durgesh/addattendance', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({Subject, rollnumber })
            })
            const res = await data.json();
            // console.log(res.status)
            if (res.status === (200)) {
                toast("Attendance Marked successfully", {
                    autoClose: 2000,
                })
                setVal({ rollnumber: "", Subject: "" })
            } else {
                toast("Some error occured", {
                    autoClose: 2000,
                })
            }
        }
    }

    return (
        <>
            <div className='style'>
                <form className='container both'>
                    <div className='students'>
                        <h3 className='text-center'> Mark Student Attendance</h3>
                        <div className="mb-3 col-10 my-4">
                            <label htmlFor="rollnumber" className="form-label">Roll Number</label>
                            <input type="rollnumber" value={inval.rollnumber} name="rollnumber" className="form-control" id="rollnumber" aria-describedby="emailHelp" placeholder='Roll number' onChange={setval} />
                        </div>
                        <div className="mb-3 col-10 my-2">
                            <label htmlFor="Subject" className="form-label">Subject</label>
                            <input type="Subject" className="form-control" value={inval.Subject} name="Subject" id="Subject" placeholder='Subject' onChange={setval} />
                        </div>
                        <div className='text-center'>
                            <button type="submit" onClick={handaleSubmit} className="btn">Submit</button></div></div>
                </form>
            </div>

            <ToastContainer />
        </>
    )
}

export default Main
