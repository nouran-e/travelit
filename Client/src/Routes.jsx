import { Routes, Route } from 'react-router-dom';
import LoginApp from './pages/Login';
import Register from './pages/Register';
import NewTrip from './pages/NewTrip';
import Itinerary from './pages/Itinerary';
import PageNotFound from './pages/PageNotFound';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<LoginApp />} />
            <Route path="/register" element={<Register />} />
                <Route path="/new-trip" element={<NewTrip />} />
                <Route path="/itinerary" element={<Itinerary />} />
                <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default AppRoutes;