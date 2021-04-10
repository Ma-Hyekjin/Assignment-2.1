import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>My name is Hyeokjin</h1>
      <p>I love coding</p>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}