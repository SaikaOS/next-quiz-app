import { Button } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

function HomeButton() {
  return (
    <Button color="dark" radius="md" style={{margin: '10px 20px'}}>
    <Link href='/'>
      <a style={{textDecoration: 'none', color: 'white'}}>Home</a>
    </Link>
</Button>
  )
}

export default HomeButton