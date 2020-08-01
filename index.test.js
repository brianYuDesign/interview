const reverseObj = require("./index")

const inputValue = {
  hired: {
    be: {
      to: {
        deserve: "I"
      }
    }
  }
}

const outputValue = {
  I: {
    deserve: {
      to: {
        be: "hired"
      }
    }
  }
}

test("sholud be defined", () => {
  expect(reverseObj).toBeDefined()
})

test("test inputValue should be equal outputValue", () => {
  expect(outputValue).toEqual(reverseObj(inputValue))
})
