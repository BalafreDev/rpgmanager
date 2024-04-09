'use client'
import { useParams } from "next/navigation"
import data from "@/components/charactersList/CharactersListTemp.json"

export default function CharacterPage() {
  const pathName = useParams()

  const character = data[0]
  
  return (
    
    <h1>
      {character.name}
    </h1>
  )
}