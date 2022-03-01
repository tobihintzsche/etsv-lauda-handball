import React from 'react'

export async function http(request: RequestInfo): Promise<String> {
  const response = await fetch(request)
  const body = await response.json()
  return body
}

// example consuming code
const data = http('https://randomuser.me/api/')
console.log(data)

export default function jugend() {
  return (
    <div>
      <h2 className="text-center text-xl font-bold">Nachwuchs</h2>
      
    </div>
  )
}
