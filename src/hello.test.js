import { hello } from "./hello.js"

const test = ({ pass, fail }) => {
	if (hello === "hello") {
		return pass("hello as expected")
	}
	return fail("expected hello")
}
export default test
