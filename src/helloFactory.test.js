import { createHello } from "./helloFactory.js"

const test = ({ pass, fail }) => {
	if (createHello() === "hello") {
		return pass("returned hello")
	}
	return fail("must return hello")
}
export default test
