import Home from './components/Home'
import SignUp from './components/SignUp'
import Login from './components/Login'
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'

function App() {
    return (
        <AuthProvider>
            <div style={{ margin: '2em' }}></div>
            <BrowserRouter>
                <Routes>
                    <Route
                        element={
                            <PrivateRoute>
                                <Home />
                            </PrivateRoute>
                        }
                        path='/'
                        component={Home}
                    />
                    <Route
                        element={<SignUp />}
                        path='/signup'
                        component={SignUp}
                    />
                    <Route
                        element={<Login />}
                        path='/login'
                        component={Login}
                    />{' '}
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App
