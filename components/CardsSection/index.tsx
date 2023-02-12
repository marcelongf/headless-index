export type CardProps = {
    title: string, 
    description: string, 
}

export default function CardSection({ cardsInfo }: {cardsInfo: CardProps[]}) {
    return (
      <div className="w-screen h-96 flex justify-around items-center">
        {cardsInfo.map((card) => (
            <div className="w-44 h-1/2 bg-gray-50 rounded border-solid border-gray-100 p-2">
                <h6>{card.title}</h6>
                <span>{card.description}</span>
            </div>
        ))}
      </div>
    )
}