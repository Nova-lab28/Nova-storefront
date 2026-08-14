import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)

export default function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    supabase.from('products').select('*').then(({ data }) => setProducts(data || []))
  }, [])

  return (
    <div style={{ padding: 20, fontFamily: 'system-ui' }}>
      <h1>Nova Store</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
        {products.map(p => (
          <div key={p.id} style={{ border: '1px solid #ddd', padding: 12, borderRadius: 8 }}>
            <h3>{p.name}</h3>
            <p>R{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
