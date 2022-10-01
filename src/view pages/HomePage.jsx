import React from 'react'
import { link } from 'react-router-dom'
function HomePage() {
    return (
        <div>
            <header>
                <nav className="navbar bg-light bg-primary">
                    <div className="container">
                        <link to="/" className="navbar-brand">DevPOS</link>
                    </div>
                </nav>

            </header>
            <main>
                <div className='container mt-3'>
                    <div className='bg-light p-5 mt-4 rounded-3'>
                        <h1>Welcome to the  Shoe store</h1>
                        <p>For Technical support: 888-888-8888</p>
                        <link to='./POSPage.jsx' className='btn btn-primary'>click here to see products</link>
                        

                    </div>
                </div>
            </main>
        </div>
    )
}

export default HomePage