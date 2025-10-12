import { multiply, division } from '../utils/UsefulFunction.js'

function ShowCalc() {
	return (
		<div>
			<p>matematica * {multiply(2, 5)}</p>
			<p>matematica / {division(15, 5)}</p>
		</div>
	)
}
export default ShowCalc
