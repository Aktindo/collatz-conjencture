const prompts = require("prompts");
let int = 0;
let i = 1;

const getInt = async () => {
  const response = await prompts({
    type: "text",
    name: "inputVal",
    message: "Please enter a number:",
  });

  int = response.inputVal;
};

getInt().then(() => {
  while (int > 1) {
    if (int % 2 !== 0) {
      const newInt = int * 3 + 1;
      console.log(
        `Odd: ${int} x 3 + 1 = ${newInt} (${i} Number${i > 1 ? "s" : ""})`
      );
      int = newInt;
    } else {
      const newInt = int / 2;
      console.log(
        `Even: ${int} / 2 = ${newInt} (${i} Number${i > 1 ? "s" : ""})`
      );
      int = newInt;
    }
    i++;
  }

  console.log(
    `\nThat took a total of ${i - 1} tries to arrive on a conclusion of 1.`
  );
});
