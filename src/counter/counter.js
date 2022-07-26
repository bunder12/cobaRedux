import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {

    const [bahasa, setBahasa] = useState(true)

    const sqtate = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleTambah = () => {
        dispatch({
            type: 'tambah',
        })
    }

    const handleKurang = () => {
        dispatch({
            type: 'kurang'
        })
    }

  return (
    <div>
        <h1>{bahasa? sqtate.indonesia.title : sqtate.inggris.title}</h1>
        <p>{bahasa? sqtate.indonesia.deskripsi : sqtate.inggris.deskripsi}</p>
        <p>Counter: {sqtate.counter} </p>
        <button onClick={handleTambah}>Tambah</button>
        <button onClick={handleKurang}>kurang</button>
    </div>
  )
}

export default Counter