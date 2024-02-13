import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Container from 'react-bootstrap/Container';
import Register from './views/Register';
import Home from './views/Home'
import Questions from './views/Questions';

export default function App() {


    return (
        <div>
            <Navigation/>
            <Container>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/register' element={<Register/>} />
                    <Route path='/questions' element={<Questions/>}/>
                </Routes>
            </Container>
        </div>
    )
}
