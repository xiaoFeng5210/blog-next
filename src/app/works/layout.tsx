import NavBar from '../../components/navbar/index';
export default function WorksLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}
