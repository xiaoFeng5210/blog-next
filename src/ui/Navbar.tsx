interface Props {
  navigations: string[]
}

function component(props: Props) {
  return (
    <ul>
      {
        props.navigations.map((nav, index) => {
          return <li>{nav}</li>
        })
      }
    </ul>
  )
}
export default component
