window.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    const clean = document.querySelector('.clean');
    const input = document.querySelector("#inputBox");
    const eqn = document.querySelector('.eqn');
    const calc = document.querySelector('.calc');
    const edit = document.querySelector('.edit');
    const deleteall = document.querySelector('.deleteall');
    const deletespan = document.querySelector('.deletespan');
    const history = document.querySelector('.record');
    const bar = document.querySelector('.history');
    const panel = document.querySelector(".panel");
    const menu = document.querySelector('.menu');
    const calculator = document.querySelector('.calculator');



    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.id !== 'clear' && button.id !== 'equal') {
                clean.id = 'del';
                clean.innerHTML = 'DEL';
            }
        });
    });
    
    input.focus();
    let resultDisplayed = false;
    
    let string = "";
    let arr = Array.from(buttons);
    arr.forEach(button => {
        button.addEventListener('click', (e) =>{
            if(e.target.id == 'equal'){
                clean.id = 'clear';
                clean.innerHTML = 'AC';
                eqn.classList.add('animate__animated', 'animate__fadeIn');
                eqn.innerHTML = string;
                if (string.trim() !== "") {
                    try {
                        string = eval(string); 
                    } catch (error) {
                        string = "Error";
                    }
                    input.value = string;
                    resultDisplayed = true;

                    calc.style.borderTop = '0.05px solid rgba(135, 134, 138, 0.5)';
                    const record = document.createElement('div');
                    const eqncontainer = document.createElement('div');
                    const resultcontainer = document.createElement('div');
                    const displaydiv = document.createElement('div');
                    calc.appendChild(record);
                    record.appendChild(displaydiv);
                    displaydiv.appendChild(eqncontainer);
                    displaydiv.appendChild(resultcontainer);
                    record.className = 'rec';
                    record.style.display = 'flex';
                    record.style.padding = '1rem';
                    record.style.paddingLeft = '2rem';
                    record.style.alignContent = 'center';
                    record.style.height = '4.5rem';
                    record.style.cursor = 'pointer';
                    record.style.borderBottom = '0.05px solid rgba(135, 134, 138, 0.5)';
                    eqncontainer.className = 'eqna';
                    eqncontainer.innerHTML = eqn.innerHTML;
                    eqncontainer.style.fontSize = '15px';
                    eqncontainer.style.marginBottom = '0.3rem';
                    eqncontainer.style.color = 'rgba(255, 255, 255, 0.6)';
                    resultcontainer.className = 'res';
                    resultcontainer.innerHTML = string;
                    resultcontainer.style.fontSize = '23px';
                    resultcontainer.style.color = '#fff';
                    record.classList.add('animate__animated', 'animate__slideInDown');
                    calc.insertBefore(record, calc.firstChild);
                    history.style.display = 'none';
                    calc.style.display = 'flex';
                } else {
                    string = "";
                } 
            }
    
            else if(e.target.id == 'clear'){
                string = "";
                eqn.innerHTML = '';
                eqn.classList.remove('animate__animated', 'animate__fadeIn');
                input.value = string;
                resultDisplayed = false;
            }
            else if(e.target.id == 'del'){
                string = string.substring(0, string.length-1);
                input.value = string;
                if(string === '') {
                    clean.id = 'clear';
                    clean.innerHTML = 'AC';
                }
                resultDisplayed = false;
            }
            else if(e.target.id == 'plusminus') {
                string = eval("-1" * string);
                input.value = string;
                resultDisplayed = false;
            }
            else{
                if (resultDisplayed) {
                    string = "";
                    eqn.innerHTML = '';
                    input.value = "";
                    resultDisplayed = false;
                }
                string += e.target.innerHTML;
                if(string === '.') {
                    string = '0.';
                }
                input.value = string;
            } 
            input.focus();
        })
    });
    
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            string = input.value;
            clean.id = 'clear';
            clean.innerHTML = 'AC';
            eqn.classList.add('animate__animated', 'animate__fadeIn');
            eqn.innerHTML = string;
            if (string !== "") {
                try {
                    string = eval(string);
                } catch (error) {
                    string = "Error";
                }
            } else {
                string = "";
            }
            input.value = string;
            resultDisplayed = true;
            
            calc.style.borderTop = '0.05px solid rgba(135, 134, 138, 0.5)';
                const record = document.createElement('div');
                const eqncontainer = document.createElement('div');
                const resultcontainer = document.createElement('div');
                const displaydiv = document.createElement('div');
                calc.appendChild(record);
                record.appendChild(displaydiv);
                displaydiv.appendChild(eqncontainer);
                displaydiv.appendChild(resultcontainer);
                record.className = 'rec';
                record.style.display = 'flex';
                record.style.padding = '1rem';
                record.style.paddingLeft = '2rem';
                record.style.alignContent = 'center';
                record.style.height = '4.5rem';
                record.style.cursor = 'pointer';
                record.style.borderBottom = '0.05px solid rgba(135, 134, 138, 0.5)';
                eqncontainer.className = 'eqna';
                eqncontainer.innerHTML = eqn.innerHTML;
                eqncontainer.style.fontSize = '15px';
                eqncontainer.style.marginBottom = '0.3rem';
                eqncontainer.style.color = 'rgba(255, 255, 255, 0.6)';
                resultcontainer.className = 'res';
                resultcontainer.innerHTML = string;
                resultcontainer.style.fontSize = '23px';
                resultcontainer.style.color = '#fff';
                record.classList.add('animate__animated', 'animate__slideInDown');
                calc.insertBefore(record, calc.firstChild);
                history.classList.add('animate__animated', 'animate__fadeOut');
                history.style.display = 'none';
                calc.style.display = 'flex';
        }
    
        if(resultDisplayed) {
            if(e.key >= '0' && e.key <= '9') {
                string = "";
                eqn.innerHTML = '';
                input.value = "";
                resultDisplayed = false;
            }

            if(e.key === 'Backspace') {
                string = "";
                eqn.innerHTML = '';
                input.value = "";
                resultDisplayed = false;
            }
        }
        input.focus();
    });

    calc.addEventListener('click', (e) => {
        if (e.target.closest('.rec')) {
            const record = e.target.closest('.rec');
            const eqncontainer = record.querySelector('.eqna');
            const resultcontainer = record.querySelector('.res');
            eqn.innerHTML = eqncontainer.innerHTML;
            input.value = resultcontainer.innerHTML;
        }
        input.focus();
    });


    let editProcess = false;
    edit.addEventListener('click', () => {
        if (editProcess) {
            edit.innerHTML = 'Edit';
            editProcess = false;
            deleteall.classList.remove('animate__animated', 'animate__fadeIn');
            deletespan.classList.remove('animate__animated', 'animate__slideInUp');
            deletespan.classList.add('animate__animated', 'animate__slideOutDown');
            deleteall.classList.add('animate__animated', 'animate__fadeOut');
            deleteall.style.backgroundColor = 'transparent';
        } else {
            edit.innerHTML = 'Done';
            editProcess = true;
            deleteall.style.display = 'flex';
            deletespan.classList.remove('animate__animated', 'animate__slideOutDown');
            deleteall.classList.remove('animate__animated', 'animate__fadeOut');
            deletespan.classList.add('animate__animated', 'animate__slideInUp');
            deleteall.classList.add('animate__animated', 'animate__fadeIn');
            setTimeout(() => {
                deleteall.style.backgroundColor = '#1c1c1e';
            }, 550);
        }
        input.focus();
    });

    deletespan.addEventListener('click', () => {
        const history = document.querySelector('.record');
        const calcdiv = document.querySelector('.calc > div');
        const recs = document.querySelectorAll('.rec');
        
        recs.forEach(rec => {
            rec.classList.add("animate__animated", "animate__fadeOutLeft");
            rec.remove();

            if(calcdiv.className !== '.rec') {
                calc.classList.add('animate__animated', 'animate__fadeOut');
                calc.style.display = 'none';
                history.classList.add('animate__animated', 'animate__fadeIn');
                history.style.display = 'flex';
            }
        });

        edit.innerHTML = 'Edit';
        editProcess = false;
        input.focus();
    }); 

    let editmode = false;
    bar.addEventListener('click', () => {
        if(editmode) {
            calculator.style.borderTopLeftRadius = '16px';
            calculator.style.borderBottomLeftRadius = '16px';
            panel.style.display = 'none';
            editmode = false;
        }
        else {
            panel.classList.add('animate__animated', 'animate__slideInRight');
            calculator.classList.add('animate__animated', 'animate__slideInLeft');
            calculator.style.borderTopLeftRadius = '0';
            calculator.style.borderBottomLeftRadius = '0';
            panel.style.display = 'block';
            editmode = true;
        }
        input.focus();
    })

    menu.addEventListener('click', () => {
        calculator.style.borderTopLeftRadius = '16px';
        calculator.style.borderBottomLeftRadius = '16px';
        panel.style.display = 'none';
        editmode = false;
        input.focus();
    })

    history.addEventListener('click', () => {
        input.focus();
    })

});
