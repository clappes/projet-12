import { Routes, Route } from 'react-router-dom';

import Home from "../../Pages/Home/Home";
import Error from "../../components/Error/Error";

function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/user/:id' element={<Home />} />
            <Route path='*' element={<Error />} />
        </Routes>
    )
}

export default Router;