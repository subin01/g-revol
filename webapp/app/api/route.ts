import { NextResponse } from 'next/server'
 
export async function GET() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await res.json()
 
  return NextResponse.json({ data: data.slice(0,2) })
}