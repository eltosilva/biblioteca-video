import Link from 'next/link'

export default function Page({ params }: IPropsPage) {
  return (
    <>
      <h1>Bem vindo a pagina {params.id}</h1>
      <p><Link href="/">Voltar para Home</Link></p>
    </>
  )
}

interface IPropsPage {
  params: { 
    id: string
  }
}