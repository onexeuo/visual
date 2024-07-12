
import '../css/Nav.css';

import Home from './Home';
import Apple from './Apple';
import NotFound from './NotFound';
import {Route, Routes, NavLink} from 'react-router-dom';

export default function Nav(){
    return(
        <div id='nav'>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/apple'>apple</NavLink></li>
                <li><NavLink to='/apple'>apple</NavLink></li>
                <li><NavLink to='/apple'>apple</NavLink></li>
                <li><NavLink to='/apple'>apple</NavLink></li>
                <li><NavLink to='/apple'>apple</NavLink></li>
                <li><NavLink to='/apple'>apple</NavLink></li>
                <li><NavLink to='/apple'>apple</NavLink></li>
                <li><NavLink to='/apple'>apple</NavLink></li>
            </ul>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/apple' element={<Apple />} />
                <Route path='/*' element={<NotFound />}/>
            </Routes>
        </div>
    )
}