type Props = {
  params: {
    category: string
  }
}

export default function Category({ params }: Props) {
  const slug = params.category

  return <div>page</div>
}
