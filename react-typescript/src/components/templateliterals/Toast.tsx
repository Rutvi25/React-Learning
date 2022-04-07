type HorizontalPosition = 'left' | 'center' | 'right'
type VerticlePosition = 'top' | 'center' | 'bottom'

type ToastProps = {
  position: Exclude<`${HorizontalPosition}-${VerticlePosition}`,'center-center'> |
  'center'
}
export const Toast = ({position}: ToastProps) => {
  return <div>Toast Notification Position {position}</div>
}