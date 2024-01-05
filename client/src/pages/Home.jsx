import { Link, useNavigate } from "react-router-dom"
import homeBKG from '../assets/artboard-studio.jpg'

function Home() {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen flex items-center justify-center bg-green-100 bg-cover" style={{ backgroundImage: `url(${homeBKG})` }}>
            <div className="bg-white p-10 rounded-lg shadow-md text-center">
                <h1 className="text-4xl mb-4 text-green-800">Welcome to Secret Santa!</h1>
                <p className="mb-4">Here is how it works: After everyone has signed up, we will randomly assign each person someone to give a gift to.</p>
                <button 
                    className="mb-4 bg-green-500 text-white rounded p-2"
                    onClick={() => navigate('/sso')}
                >
                    Single Sign-On
                </button>
                <br />
                <button 
                    className="bg-green-500 text-white rounded p-2"
                    onClick={() => navigate('/register')}
                >
                    Go to Registration
                </button>
            </div>
        </div>
    )
}

export default Home;