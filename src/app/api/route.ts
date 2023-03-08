export async function GET(request: Request) {
  console.log('hello, nextjs')
  return new Response('Hello, Next.js!')
}
