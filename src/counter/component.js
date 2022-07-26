import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Component = () => {

    const sqtate = useSelector((state) => state);
    const [bahasa, setBahasa] = useState(true)

  return (
    <div>
        <h1>{bahasa? sqtate.indonesia.title : sqtate.inggris.title}</h1>
        <p>{bahasa? sqtate.indonesia.deskripsi : sqtate.inggris.deskripsi}</p>
    </div>
  )
}

export default Component