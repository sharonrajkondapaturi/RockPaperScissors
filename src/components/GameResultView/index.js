import {
  WeaponList,
  Image,
  Name,
  Result,
  AgainButton,
  SmallContainer,
} from './styledComponents'

const GameResultView = props => {
  const {weapons, onAgain, game} = props
  const {user, opponent} = weapons

  const onPlay = () => {
    onAgain()
  }
  return (
    <WeaponList>
      <SmallContainer>
        <Name>YOU</Name>
        <Image src={user} alt="your choice" />
      </SmallContainer>
      <SmallContainer type="button">
        <Name>OPPONENT</Name>
        <Image src={opponent} alt="opponent choice" />
      </SmallContainer>
      <SmallContainer>
        <Result>{game}</Result>
        <AgainButton type="button" onClick={onPlay}>
          PLAY AGAIN
        </AgainButton>
      </SmallContainer>
    </WeaponList>
  )
}

export default GameResultView
