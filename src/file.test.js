import { fn } from "./file.js"

if (fn() === "hello world") {
	console.log("test ok")
} else {
	throw new Error("test failed")
}
