import styles from './characteristicsTable.module.css'

export default function CharacteristicsTable({characteristicsDatas}:any) {

  const characteristics = [
    ["CC", "capCombat"],
    ["CT", "capTir"],
    ["F", "force"],
    ["E", "endurance"],
    ["I", "initiative"],
    ["Ag", "agilite"],
    ["Dex", "dexterite"],
    ["Int", "intelligence"],
    ["FM", "forceMentale"],
    ["Soc", "sociabilite"],
  ]

  
  
  for (let i = 0; i < 10; i++) {
    characteristics[i][2]=characteristicsDatas[i][0];
    characteristics[i][3]=characteristicsDatas[i][1];
  }
  // console.log(characteristics);
  
  return (
    <div>
      <h2>Caractéristiques</h2>
      <div className={styles.caracTable}>
        {characteristics.map((characteristic : any) => (
          <div className={styles.caracColumns} key={characteristic[0]}>
            <div className={styles.caracCells}>{characteristic[0]}</div>
            <div className={styles.caracCells}>{characteristic[2]}</div>
            <div className={styles.caracCells}>{characteristic[3]}</div>
            <div className={styles.caracCells}>{characteristic[2] + characteristic[3]}</div>
          </div>
        ))}
      </div>
    </div>
  )
}