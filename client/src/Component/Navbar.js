import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav class="navbar">
                <div class="container">
                    <div>
                    <a class="navbar-brand" href="#">Student Attendance</a></div>
                    <div className='rightnav' >
                        <a className='text' href='' >Login</a>
                        <a className='text'  href=''>Sign up</a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
