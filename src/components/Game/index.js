import {useState, useEffect} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import WeaponImages from '../WeaponImages'
import GameResultView from '../GameResultView'
import {
  GameContainer,
  ScoreBoard,
  Weapons,
  Name,
  Score,
  ScoreHead,
  WeaponImage,
  RuleButton,
  PopDisplay,
  RuleImage,
  Trigger,
  CenterContainer,
  CloseButton,
} from './styledComponents'

const Game = props => {
  const [userGame, setWeapon] = useState('')
  const [opponentGame, setOpponentWeapon] = useState('')
  const [currentScore, setScore] = useState(0)
  const [weapons, setDisplay] = useState({user: '', opponent: ''})
  const [game, setGame] = useState('')
  const [playAgain, setAgain] = useState(false)
  const {choicesList} = props

  const onGame = (weaponItem, image) => {
    const choice = choicesList[Math.floor(Math.random() * 3)]
    setWeapon(weaponItem)
    setOpponentWeapon(choice.id)
    setDisplay({user: image, opponent: choice.imageUrl})
  }

  useEffect(() => {
    switch (true) {
      case userGame === 'ROCK' && opponentGame === 'SCISSORS':
        setScore(prevScore => prevScore + 1)
        setGame('YOU WON')
        setAgain(prevState => !prevState)
        break
      case userGame === 'PAPER' && opponentGame === 'ROCK':
        setScore(prevScore => prevScore + 1)
        setGame('YOU WON')
        setAgain(prevState => !prevState)
        break
      case userGame === 'SCISSORS' && opponentGame === 'PAPER':
        setScore(prevScore => prevScore + 1)
        setGame('YOU WON')
        setAgain(prevState => !prevState)
        break
      case userGame === '' && opponentGame === '':
        break
      case userGame === opponentGame:
        setScore(prevScore => prevScore)
        setGame('IT IS DRAW')
        setAgain(prevState => !prevState)
        break
      default:
        setScore(0)
        setGame('YOU LOSE')
        setAgain(prevState => !prevState)
    }
  }, [userGame, opponentGame])

  const onAgain = () => {
    setAgain(prevState => !prevState)
  }

  console.log(weapons)
  return (
    <GameContainer>
      <CenterContainer>
        <ScoreBoard>
          <Weapons>
            <Name>
              ROCK <br />
              PAPER <br />
              SCISSORS
            </Name>
          </Weapons>
          <Score>
            <ScoreHead fontsize={22} fontfamily="Bree Serif">
              Score
            </ScoreHead>
            <ScoreHead fontsize={40} fontfamily="Roboto">
              {currentScore}
            </ScoreHead>
          </Score>
        </ScoreBoard>
        {playAgain ? (
          <WeaponImage wrap="wrap" width={400}>
            <GameResultView weapons={weapons} onAgain={onAgain} game={game} />
          </WeaponImage>
        ) : (
          <WeaponImage wrap="wrap" width={600}>
            {choicesList.map(eachChoice => (
              <WeaponImages
                key={eachChoice.id}
                weapons={eachChoice}
                onGame={onGame}
              />
            ))}
          </WeaponImage>
        )}
      </CenterContainer>
      <Trigger>
        <Popup modal trigger={<RuleButton>RULES</RuleButton>}>
          {close => (
            <PopDisplay>
              <RuleImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
              <CloseButton
                type="button"
                data-testid="closeButton"
                onClick={() => close()}
              >
                <RiCloseLine />
              </CloseButton>
            </PopDisplay>
          )}
        </Popup>
      </Trigger>
    </GameContainer>
  )
}

export default Game
