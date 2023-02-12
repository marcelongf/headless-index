import type { NextApiRequest, NextApiResponse } from 'next'

const pageJSON = [
    {
        comp: "textSection",
        props: { title: 'Teste se foi foi', description: 'Olha só, quem diria', bgco: 'white' }
    },
    {
        comp: 'cardSection',
        props: {
        cardsInfo: [
            {title: 'que brabo', description: 'teste card 1'},
            {title: 'card2', description: 'teste card 2'},
            {title: 'card3', description: 'teste card 3'},
        ]
        }
    }
]

const invertedPageJSON = [
    {
        comp: 'cardSection',
        props: {
        cardsInfo: [
            {title: 'que brabo', description: 'teste card 1'},
            {title: 'card2', description: 'teste card 2'},
            {title: 'card3', description: 'teste card 3'},
        ]
        }
    },
    {
        comp: "textSection",
        props: { title: 'Teste se foi foi', description: 'Olha só, quem diria', bgco: 'white' }
    }
]

let currentPage = pageJSON

export default function sectionsHandler(
  req: NextApiRequest,
  res: NextApiResponse
){
    const {method} = req;
    switch (method) {
        case 'GET':
            res.status(200).json(currentPage)
            break;
        case 'PUT':
            currentPage = invertedPageJSON
            res.status(200).json('ok')
            break;
        default:
            res.setHeader('Allow', ['GET', 'PUT'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }   
}