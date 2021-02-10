//using selectors inside the element

const questions = document.querySelectorAll('.question');

questions.forEach(function(question) {
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', function() {

        // hide open question before showing a new one
        questions.forEach(function(q) {
            if (q !== question) {
                q.classList.remove('show-text');
            }
        });

        question.classList.toggle('show-text');
    });
});



// // traversing the dom

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn) {
//     btn.addEventListener('click', function(e) {
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');

//     });
// });