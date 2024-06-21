import {WeaponList, Image, WeaponButton} from './styledComponents'

const WeaponImages = props => {
  const {weapons, onGame} = props
  const {imageUrl, id} = weapons
  const weaponId = `${id.toLowerCase()}Button`
  const onRender = () => {
    onGame(id, imageUrl)
  }

  return (
    <WeaponList>
      <WeaponButton type="button" data-testid={weaponId}>
        <Image src={imageUrl} alt={id} onClick={onRender} />
      </WeaponButton>
    </WeaponList>
  )
}

export default WeaponImages
