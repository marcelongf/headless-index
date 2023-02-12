export type TextSectionProps = {
    title: string, 
    description: string, 
    bgco: string
}

export default function TextSection({ title, description, bgco }: TextSectionProps) {
    return (
      <div className="w-screen h-96" style={{backgroundColor: bgco}}>
        <h3>{title}</h3>
        <span>{description}</span>
      </div>
    )
}