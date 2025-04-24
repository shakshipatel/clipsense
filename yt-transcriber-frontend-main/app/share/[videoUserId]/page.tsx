import SharePage from "./SharePage"

export default async function Page ({
  params,
}: {
  params: Promise<{ videoUserId: string }>
}) {
  const { videoUserId } = await params
  return (
    <SharePage videoUserId={videoUserId} />
    // <div>{ videoUserId }</div>
  )
}
