import React from 'react'

export default function teachers({initialTeachers}) {
    const [teachers, setTeachers] = useState(initialTeachers)

    async function handleLoadTeachers(value) {
        const response = await fetch(`/api/teachers?${value}`)
        setBooks(await response.json())
    }
  return (
    <div>teachers</div>
  )
}
