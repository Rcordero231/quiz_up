import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Container from 'react-bootstrap/Container';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import Questions from './views/Questions';
import AlertMessage from './components/AlertMessages';
import { CategoryType, UserType } from './types';

export default function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState<UserType | null>(null);

    const [message, setMessage] = useState<string | null>(null)
    const [category, setCategory] = useState<CategoryType | null>(null)

    const logUserIn = (user: UserType) => {
        setIsLoggedIn(true);
        setLoggedInUser(user)
    }

    const logUserOut = () => {
        setIsLoggedIn(false);
        setLoggedInUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('tokenExp');
        flashMessage("You have logged out", "primary");
    }

    const flashMessage = (newMessage: string | null, newCategory: CategoryType | null) => {
        setMessage(newMessage);
        setCategory(newCategory);
    }

    return (
        <div>
            <Navigation isLoggedIn={isLoggedIn} handleClick={logUserOut} />
            <Container>
                {message && <AlertMessage message={message} category={category} flashMessage={flashMessage} />}
                <Routes>
                    <Route path='/' element={<Home isLoggedIn={isLoggedIn} currentUser={loggedInUser} />} />
                    <Route path='/login' element={<Login flashMessage={flashMessage} logUserIn={logUserIn} />} />
                    <Route path='/register' element={<Register flashMessage={flashMessage} />} />
                    <Route path ='/questions' element={<Questions/>} />
                </Routes>
            </Container>
        </div>
    )
}
