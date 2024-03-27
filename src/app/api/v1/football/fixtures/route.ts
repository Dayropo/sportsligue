import axios from "@/src/libs/axios"

export async function GET() {
  const res = await axios
    .get(
      `football/fixtures/date/2024-02-28?api_token=${process.env.NEXT_PUBLIC_SPORTMONKS_API_TOKEN}`
      // {
      //   headers: {
      //     Authorization: `${process.env.NEXT_PUBLIC_SPORTMONKS_API_TOKEN}`
      //   }

      // }
    )
    .catch(err => console.error(err))

  console.log({ res })

  return 
}
