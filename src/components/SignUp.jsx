import { useState } from 'react'
import { auth } from '../firebase'
import { useNavigate, Navigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await auth.createUserWithEmailAndPassword(email, password)
        } catch (error) {
            setError(error.message)
        }
    }
    const handleChangeEmail = (event) => {
        setEmail(event.currentTarget.value)
    }
    const handleChangePassword = (event) => {
        setPassword(event.currentTarget.value)
    }
    const navigate = useNavigate()
    const { user } = useAuthContext()

    // ログインしている場合はルートにリダイレクト
    if (user) {
        return <Navigate to='/' />
    }
    return (
        <div>
            <h1>ユーザ登録</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}{' '}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>メールアドレス</label>
                    <input
                        name='email'
                        type='email'
                        placeholder='email'
                        onChange={(event) => handleChangeEmail(event)}
                    />
                </div>
                <div>
                    <label>パスワード</label>
                    <input
                        name='password'
                        type='password'
                        placeholder='password'
                        onChange={(event) => handleChangePassword(event)}
                    />
                </div>
                <div>
                    <button>登録</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp
