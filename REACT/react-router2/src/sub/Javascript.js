
import { Route, Routes, NavLink } from 'react-router-dom';
import JavascriptSub from './JavascriptSub';

export default function Javascript(){
    return(
      <>
        <div>
          <h2>Javascript</h2>
          <p>
            <NavLink to='/javascript/1'>sub1</NavLink> &nbsp;
            <NavLink to='/javascript/2'>sub2</NavLink> 
          </p>
        </div>
        <Routes>
          <Route path='/:pid' element={<JavascriptSub />} />
        </Routes>
      </>
    )
  }