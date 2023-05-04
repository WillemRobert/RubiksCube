import { Routes, Route } from 'react-router-dom';
import { RubiksCube } from './pages/RubiksCube';

export const Router = () => {
    return <Routes>
        <Route exact path='/rubiksCube' element={<RubiksCube />} />
    </Routes>
}