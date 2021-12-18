import { useState } from 'react'
import { auth } from '../firebase'
import { Link } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
    }
    const handleChangeEmail = (event) => {
        setEmail(event.currentTarget.value)
    }
    const handleChangePassword = (event) => {
        setPassword(event.currentTarget.value)
    }

    return (
        <div>
            <h1>ログイン</h1>
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
                    <button>ログイン</button>
                </div>
                <div>
                    <Link to={'/signup'}>ユーザー登録</Link>
                </div>
            </form>
        </div>
    )
}

export default Login
