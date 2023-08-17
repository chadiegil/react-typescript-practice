// style a props
type ContainerProps = {
  styles: React.CSSProperties
}
const Container = ({ styles }: ContainerProps) => {
  return <div style={styles}>Text sample</div>
}

export default Container
