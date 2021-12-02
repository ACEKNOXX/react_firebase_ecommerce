import React, { useState } from 'react'
import { auth, db } from '../Config/Config'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Signup = (props) => {

    // defining state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // signup
    const signup = (e) => {
        setLoading(true);
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((cred) => {
            db.collection('SignedUpUsersData').doc(cred.user.uid).set({
                Name: name,
                Email: email,
                Password: password
            }).then(() => {
                toast.info('Registeration Successful', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                });
                setName('');
                setEmail('');
                setPassword('');
                setError('');
                props.history.push('/login');
            }).catch(err =>{
                setLoading(false);
                setError(err.message)
            });
        }).catch(err =>{
            setLoading(false);
            setError(err.message)
        });
    }

    return (
        <div className='container'>
            <br />
            <h2>Sign up</h2>
            <br />
            <form autoComplete="off" className='form-group' onSubmit={signup}>
                <label htmlFor="name">Name</label>
                <input type="text" className='form-control' required
                    onChange={(e) => setName(e.target.value)} value={name} />
                <br />
                <label htmlFor="email">Email</label>
                <input type="email" className='form-control' required
                    onChange={(e) => setEmail(e.target.value)} value={email} />
                <br />
                <label htmlFor="passowrd">Password</label>
                <input type="password" className='form-control' required
                    onChange={(e) => setPassword(e.target.value)} value={password} />
                <br />
                <button type="submit" className='btn btn-success btn-md mybtn'>
                    
                    {!loading && 
                        <span>
                           SUBMIT
                        </span>
                    }
                    {loading &&
                        <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    }

                </button>
            </form>
            {error && <span className='error-msg'>{error}</span>}
            <br />
            <span>Already have an account? Login
                <Link to="login"> Here</Link>
            </span>
        </div>
    )
}
