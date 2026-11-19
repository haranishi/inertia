import { Head } from '@inertiajs/react'
import { useState } from 'react'

export default () => {
  const [title, setTitle] = useState<string | number>('Title from Children')

  return (
    <>
      <Head>
        {/* Title as a child element instead of prop */}
        <title>{title}</title>
        <meta name="description" content="Title set via children, not prop" />
      </Head>

      <div>
        <h1>Title in Children</h1>
        <p>Tests title element as a child instead of using title prop</p>
        <button onClick={() => setTitle(title === 0 ? 42 : 0)}>Set numeric title</button>
      </div>
    </>
  )
}
