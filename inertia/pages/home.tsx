import { Head } from '@inertiajs/react'

type HomeProps = {
  title: string
}

export default function Home({ title }: HomeProps) {
  return (
    <>
      <Head title={title} />

      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">{title}</h1>
      </div>
    </>
  )
}