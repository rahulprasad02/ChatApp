import React, { useState } from 'react'
import { auth, db } from '../firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

const SendMessage = ({scroll}) => {

    const [input, setInput] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault()
        if (input === '') {
            alert('Please enter a valid message')
            return
        }
        const { uid, displayName } = auth.currentUser
        await addDoc(collection(db, 'messages'), {
            text: input,
            name: displayName,
            uid,
            timestamp: serverTimestamp()
        })
        setInput('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })

    }

    return (
        <form onSubmit={sendMessage} className='formDesign'>
            <input value={input}
                onChange={(e) => setInput(e.target.value)}
                className='inputDesign'
                type="text"
                placeholder='Messgae' />
            <button className='buttonDesign' type="submit">Send</button>
        </form>
    )
}

export default SendMessage
