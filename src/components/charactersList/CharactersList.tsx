import Link from "next/link"
import data from "./CharactersListTemp.json"
import styles from './charactersList.module.css'
export default function CharactersList() {

  const characters = data
  
  return (
    <div className={styles.container}>
      {characters.map((character) => (
          <Link href={`/characters/${character.name}`} className={styles.links} key={character.name}>
            <h2>{character.name}</h2>
            <div>{character.species}</div>
          </Link>
        )
      )}
    </div>
  )
}