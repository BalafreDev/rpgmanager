'use client'
import { useParams } from "next/navigation"
import data from "@/components/charactersList/CharactersListTemp.json"
import styles from './character.module.css'
import CharacteristicsTable from "@/components/character/CharacteristicsTable"



export default function CharacterPage() {
  const id = useParams()

  const character: any = data[0]

  const characterArray = []

  for (let i in character) {
    characterArray.push([i, character[i]])
  }

  const generalDatas = []
  for (let i = 0; i < 11; i++) {
    generalDatas.push(characterArray[i][1])
  }

  return (
    <div>
      <h1>{character.name}</h1>
      <div>{character.species} {character.age} ans {character.height / 100}m</div>
      <div>
        <CharacteristicsTable characteristicsDatas={character.characteristics} />
      </div>
    </div>


  )
}