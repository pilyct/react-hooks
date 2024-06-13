import {useState, useEffect} from 'react'

import './HookUseEffect.css'

export default function HookUseEffect() {
  const [category, setCategory] = useState('posts')
  const [categoryItems, setCategoryItems] = useState([])

  useEffect(() => {
    console.log('category changed')

    fetch(`https://jsonplaceholder.typicode.com/${category}`)
      .then(response => response.json())
      .then(json => setCategoryItems(json))

    return () => {
      console.log('return from category change')
    }
  }, [category])

  return (
    <>
      <div className='hook'>
        <div className='fetch-title'>Example: <span>Fetch Data</span></div>
        <div className='fetch'>
          <div className= 'buttons'>
            <button onClick={() => setCategory('posts')}> Posts </button>
            <button onClick={() => setCategory('users')}> Users </button>
            <button onClick={() => setCategory('comments')}> Comments </button>
          </div>
          <h3>{category}</h3>
          <div className='query'>
            {categoryItems.map(item => {
              return <pre key={item.id}>{JSON.stringify(item, null, 2)}</pre>
            })}
          </div>
        </div>
      </div>
    </>
  )
}
