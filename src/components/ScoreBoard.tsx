import { Grid } from '@mui/material'
import { styled } from '@mui/system'

type Player = {
	label: string
	score: number
}

const ScoreBoard = ({
	p1,
	p2,
}: {
	p1: Player
	p2: Player
}) => {
	return (
		<StyledScoreBoard>
			{p1.label}
			<h1>
				{p1.score} : {p2.score}
			</h1>
			{p2.label}
		</StyledScoreBoard>
	)
}

const StyledScoreBoard = styled(Grid)({
	display: 'flex',
	width: '100vw',
	justifyContent: 'center',
	marginTop: '1rem',
	fontSize: '1.5rem',
	fontFamily: 'Architects Daughter',
})

export default ScoreBoard
