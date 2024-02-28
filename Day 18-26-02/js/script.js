
const render = (question, answer) => {
    let display = document.getElementById('body');
    display.innerHTML = `
        <div class="order">Question ${ question.id } of 5</div>
        <div class="title"> ${ question.title }</div>
        <div class="answer">
            <input type="radio" id="a1" name="answer" value="a1"> ${ answer.a1} <br>
            <input type="radio" id="a2" name="answer" value="a2"> ${ answer.a2} <br>
            <input type="radio" id="a3" name="answer" value="a3"> ${ answer.a3} <br>
        </div>
        <div class="next">
            <button>Next</button>
        </div>
    `;
}

const onHandleClick = () => {
    let next = document.getElementById('next');
    next.addEventListener('click', () => {
        let selectedValue = document.querySelector('input[name="answer"]:checked').value;
        console.log(selectedValue);
    })
}

const initScreen = () => {
    render(question[0], answer[0]);
    onHandleClick();
}

initScreen();