
import { useState } from 'react'
import './App.css'

function App() {
const [rating , setRating] = useState('')
const [comment , setComment] = useState('')

  return (
    <>
      <h1 className='text-3xl text-green-600 mx-auto'>Fil Rouge</h1>
      <div>
  <h3>Laisser un avis</h3>

  <div>
    {[1,2,3,4,5].map((star) => (
      <span
        key={star}
        onClick={() => setRating(star)}
        style={{
          cursor: 'pointer',
          fontSize: '30px',
          color: star <= rating ? '#FFD700' : '#ccc'
        }}
      >
        ★
      </span>
    ))}
  </div>

  <textarea
    placeholder="Écrire un commentaire…"
    value={comment}
    onChange={(e) => setComment(e.target.value)}
  />

  {/* <button onClick={submitReview}>Envoyer</button> */}
</div>
    </>
  )
}

export default App
