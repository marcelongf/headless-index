import styles from '../page.module.css'
import TextSection from '@/components/TextSection'
import { TextSectionProps } from '@/components/TextSection'
import CardSection from '@/components/CardsSection'
import { CardProps } from '@/components/CardsSection'

type SectionType = {
  comp: 'textSection' | 'cardSection'
  props: any
}

const componentsStrategy = {
  textSection: (props:TextSectionProps) => (<TextSection {...props} />),
  cardSection: (props: {cardsInfo: CardProps[]}) => (<CardSection {...props} />)
}

async function geyData() {
  const res = await fetch(`http://localhost:3001/api/sections`);
  if(!res.ok){
    throw new Error('Erro ao chamar a api');
  }
  return res.json();
}

export default async function Home() {
  const pageJson = await geyData()
  
  return (
    <main className={styles.main}>
      <div>
        {pageJson.map((section: SectionType) => {
          return componentsStrategy[section.comp](section.props)
        })}
      </div>
    </main>
  )
}