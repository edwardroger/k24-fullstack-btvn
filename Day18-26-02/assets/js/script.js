const render = (question, answer) => {
  let display = document.getElementById("body");
  display.innerHTML = `
            <div class="order">Question ${question.id} of 5</div>
            <div class="title">${question.title}?</div>
            <div class="answer">
                <input type="radio" id="a1" name="answer" value="${answer.a1}"> ${answer.a1} <br>
                <input type="radio" id="a2" name="answer" value="${answer.a2}"> ${answer.a2} <br>
                <input type="radio" id="a3" name="answer" value="${answer.a3}"> ${answer.a3} <br>
                <input type="hidden" id="question_number" value="${question.id}">
            </div>
        `;
};
const calculateScore = (userAnswers) => {
  let score = 0;
  for (let i = 0; i < userAnswers.length; i++) {
    if (userAnswers[i] === questions[i].correctAnswer) {
      score++;
    }
  }
  return score;
};

const onHandleClick = () => {
  let next = document.getElementById("next");
  next.addEventListener("click", () => {
    let selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) {
      alert("Please select an answer");
      return; // Stop execution if no answer is selected
    }
    let answer = selected.value;
    let questionNumber = parseInt(
      document.getElementById("question_number").value
    );

    // Save answer to localStorage
    let answerOfUser = JSON.parse(localStorage.getItem("answer") || "[]");
    answerOfUser.push(answer);
    localStorage.setItem("answer", JSON.stringify(answerOfUser));

    if (answerOfUser.length === 5) {
      // All questions answered, calculate total score
      let totalCorrect = calculateScore(answerOfUser); // You need to implement this function
      let display = document.getElementById("body");
      display.innerHTML = `${totalCorrect}/5`;
    } else {
      // Render next question
      render(questions[questionNumber], answers[questionNumber]);
    }
  });
};

const initScreen = () => {
  localStorage.setItem("answer", JSON.stringify([]));
  render(questions[0], answers[0]);
  onHandleClick();
};

initScreen();
