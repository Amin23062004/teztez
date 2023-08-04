const button = document.querySelector('#myButton');
const container = document.querySelector('#container')
const submit1 = document.querySelector('#submit')
let productName = []
let selectCounter = 0;
let selectedOption
let inputValue
let mass = {
    product: [],
    number: []
}

button.addEventListener('click', () => {
    const newCafe = document.querySelector('#nameCafe').value;
    const selectBox = document.createElement('select');
    selectBox.id = `selectBox${selectCounter}`;
    selectCounter++;



    if (newCafe == 'Выберите кафе') {
        alert('Выберите кафе')
    }
    else if (newCafe == 'М-кафе'){
        container.appendChild(selectBox);
        const option1 = document.createElement('option');
        const option2 = document.createElement('option');
        const option3 = document.createElement('option');
        const option4 = document.createElement('option');
        const option5 = document.createElement('option');
        const option6 = document.createElement('option');
        const option7 = document.createElement('option');
        const option8 = document.createElement('option');
        const option9 = document.createElement('option');
        const option10 = document.createElement('option');
        const option11 = document.createElement('option');
        const option12 = document.createElement('option');
        const option13 = document.createElement('option');
        const option14 = document.createElement('option');
        const option15 = document.createElement('option');
        const option16 = document.createElement('option');
        const option17 = document.createElement('option');
        const option02 = document.createElement('option');

        option1.text = 'Выбирите продукт'
        option2.text = 'Хот-дог М';
        option02.text = 'Хот-дог М-Большой';
        option3.text = 'Куриный рол';
        option4.text = 'Бурито';
        option5.text = 'Гам-Бургер';
        option6.text = 'Чиз-Бургер';
        option7.text = 'Биг-Бургер';
        option8.text = 'Биг-Чиз-Бургер';
        option9.text = 'Сэндвич';
        option10.text = 'Лонг сэндвич';
        option11.text = 'Крылышки';
        option12.text = 'Нагецы';
        option13.text = 'Панини';
        option14.text = 'Подеревянский';
        option15.text = 'Фри';
        option16.text = 'Цезарь';
        option17.text = 'Овошной';

        option1.value = 'Выбирите продукт'
        option2.value = 'Хот-дог М';
        option02.value = 'Хот-дог М-Большой';
        option3.value = 'Куриный рол';
        option4.value = 'Бурито';
        option5.value = 'Гам-Бургер';
        option6.value = 'Чиз-Бургер';
        option7.value = 'Биг-Бургер';
        option8.value = 'Биг-Чиз-Бургер';
        option9.value = 'Сэндвич';
        option10.value = 'Лонг сэндвич';
        option11.value = 'Крылышки';
        option12.value = 'Нагецы';
        option13.value = 'Панини';
        option14.value = 'Подеревянский';
        option15.value = 'Фри';
        option16.value = 'Цезарь';
        option17.value = 'Овошной';

        selectBox.appendChild(option1);
        selectBox.appendChild(option2);
        selectBox.appendChild(option3);
        selectBox.appendChild(option4);
        selectBox.appendChild(option5);
        selectBox.appendChild(option6);
        selectBox.appendChild(option7);
        selectBox.appendChild(option8);
        selectBox.appendChild(option9);
        selectBox.appendChild(option10);
        selectBox.appendChild(option11);
        selectBox.appendChild(option12);
        selectBox.appendChild(option13);
        selectBox.appendChild(option14);
        selectBox.appendChild(option15);
        selectBox.appendChild(option16);
        selectBox.appendChild(option17);
        selectBox.appendChild(option02);
        selectBox.id = 'newProdeuct'

        const input = document.createElement('input');
        input.type = 'number';
        input.value = '0'
        input.id = 'num'
        container.appendChild(input);

        const checkButton = document.createElement('span')
        checkButton.innerHTML = '<span id="chekBtn" class="btn btn-small btn-warning">&check;</span>';
        checkButton.id = 'chek1'
        container.appendChild(checkButton);

        const delateButton = document.createElement('span')
        delateButton.innerHTML = '<span id="chekBtn" class="btn btn-small btn-danger">&times;</span>';
        delateButton.id = 'chek1'
        container.appendChild(delateButton);

        selectBox.addEventListener('change', (event) => {
            selectedOption = event.target.value;

        })

        input.addEventListener('change', (event) => {
            inputValue = event.target.value
            console.log(inputValue)
        });
        checkButton.addEventListener('click', (event) => {
            checkButton.innerHTML = '<span  id="chekBtn" class="btn btn-small btn-success">&check;</span>'
            mass.product.pop()
            mass.number.pop()
            mass.number.push(inputValue)
            mass.product.push(selectedOption)
            productName.push(mass.product + ' ' + mass.number + 'шт')
            console.log(inputValue)
        })
        delateButton.addEventListener('click', (event) =>{
            delateButton.id = 'delBtn'
            selectBox.remove()
            input.remove()
            checkButton.remove()
            delateButton.remove()
        })
    }

    else if (newCafe == 'Шаходат'){
        container.appendChild(selectBox);
        const option1 = document.createElement('option');
        const option2 = document.createElement('option');
        const option3 = document.createElement('option');
        const option4 = document.createElement('option');
        const option5 = document.createElement('option');
        const option6 = document.createElement('option');
        const option7 = document.createElement('option');
        const option8 = document.createElement('option');
        const option9 = document.createElement('option');
        const option10 = document.createElement('option');
        const option11 = document.createElement('option');
        const option12 = document.createElement('option');
        const option13 = document.createElement('option');
        const option14 = document.createElement('option');
        const option15 = document.createElement('option');
        const option16 = document.createElement('option');
        const option17 = document.createElement('option');
        const option02 = document.createElement('option');
        const option18 = document.createElement('option');
        const option19 = document.createElement('option');
        const option20 = document.createElement('option');
        const option21 = document.createElement('option');
        const option22 = document.createElement('option');
        const option23 = document.createElement('option');
        const option24 = document.createElement('option');
        const option25 = document.createElement('option');
        const option26 = document.createElement('option');


        option1.text = 'Выбирите продукт';
        option2.text = 'Шашлык Мург';
        option02.text = 'Шашлык Крылышки';
        option3.text = 'Шашлык Фарш';
        option4.text = 'Шашлык Нежный';
        option5.text = 'Шашлык Филе';
        option6.text = 'Шашлык Кусковой';
        option7.text = 'Пицца Ассорти';
        option8.text = 'Пицца Сырная';
        option9.text = 'Пицца Мясная';
        option10.text = 'Пицца Маргарита';
        option11.text = 'Пицца Пиперони';
        option12.text = 'Пицца BBQ';
        option13.text = 'Шурбо Гови';
        option14.text = 'Шурбо Мурги';
        option15.text = 'Ош';
        option16.text = 'Табака';
        option17.text = 'Грыл';
        option18.text = 'Реза Шурбо';
        option19.text = 'Борщ';
        option20.text = 'Угро Гови';
        option21.text = 'Угро Мурги';
        option22.text = 'Рассольник';
        option23.text = 'Голупсы';
        option24.text = 'Лагман';
        option25.text = 'Королевский';
        option26.text = 'Зелёный';

        option1.value = 'Выбирите продукт';
        option2.value = 'Шашлык Мург';
        option02.value = 'Шашлык Крылышки';
        option3.value = 'Шашлык Фарш';
        option4.value = 'Шашлык Нежный';
        option5.value = 'Шашлык Филе';
        option6.value = 'Шашлык Кусковой';
        option7.value = 'Пицца Ассорти';
        option8.value = 'Пицца Сырная';
        option9.value = 'Пицца Мясная';
        option10.value = 'Пицца Маргарита';
        option11.value = 'Пицца Пиперони';
        option12.value = 'Пицца BBQ';
        option13.value = 'Шурбо Гови';
        option14.value = 'Шурбо Мурги';
        option15.value = 'Ош';
        option16.value = 'Табака';
        option17.value = 'Грыл';
        option18.value = 'Реза Шурбо';
        option19.value = 'Борщ';
        option20.value = 'Угро Гови';
        option21.value = 'Угро Мурги';
        option22.value = 'Рассольник';
        option23.value = 'Голупсы';
        option24.value = 'Лагман';
        option25.value = 'Королевский';
        option26.value = 'Зелёный';

        selectBox.appendChild(option1);
        selectBox.appendChild(option2);
        selectBox.appendChild(option3);
        selectBox.appendChild(option4);
        selectBox.appendChild(option5);
        selectBox.appendChild(option6);
        selectBox.appendChild(option7);
        selectBox.appendChild(option8);
        selectBox.appendChild(option9);
        selectBox.appendChild(option10);
        selectBox.appendChild(option11);
        selectBox.appendChild(option12);
        selectBox.appendChild(option13);
        selectBox.appendChild(option14);
        selectBox.appendChild(option15);
        selectBox.appendChild(option16);
        selectBox.appendChild(option17);
        selectBox.appendChild(option18);
        selectBox.appendChild(option19);
        selectBox.appendChild(option20);
        selectBox.appendChild(option21);
        selectBox.appendChild(option22);
        selectBox.appendChild(option23);
        selectBox.appendChild(option24);
        selectBox.appendChild(option25);
        selectBox.appendChild(option26);

        selectBox.id = 'newProdeuct'

        const input = document.createElement('input');
        input.type = 'number';
        input.value = '0'
        input.id = 'num'
        container.appendChild(input);

        const checkButton = document.createElement('span')
        checkButton.innerHTML = '<span id="chekBtn" class="btn btn-small btn-warning">&check;</span>';
        checkButton.id = 'chek1'
        container.appendChild(checkButton);

        const delateButton = document.createElement('span')
        delateButton.innerHTML = '<span id="chekBtn" class="btn btn-small btn-danger">&times;</span>';
        delateButton.id = 'chek1'
        container.appendChild(delateButton);

        selectBox.addEventListener('change', (event) => {
            selectedOption = event.target.value;

        })

        input.addEventListener('change', (event) => {
            inputValue = event.target.value
            console.log(inputValue)
        });
        checkButton.addEventListener('click', (event) => {
            checkButton.innerHTML = '<span  id="chekBtn" class="btn btn-small btn-success">&check;</span>'
            mass.product.pop()
            mass.number.pop()
            mass.number.push(inputValue)
            mass.product.push(selectedOption)
            productName.push(mass.product + ' ' + mass.number + 'шт')
            console.log(inputValue)
        })
        delateButton.addEventListener('click', (event) =>{
            delateButton.id = 'delBtn'
            selectBox.remove()
            input.remove()
            checkButton.remove()
            delateButton.remove()
        })


    }})



function getCurrentDateTime() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');


    const dateTimeString = `${year}-${month}-${day}, ${hours}:${minutes}`;
    return dateTimeString;
}
// Другой код вашего проекта
submit1.addEventListener('click', (e) => {
    e.preventDefault();
    const botToken = '6342509143:AAHUI8ZXrkbrMnKL1qAEIzDFL9WzOClQPrk'; // замените YOUR_BOT_TOKEN на ваш токен бота
    const chatId = '-1001801304867'; // замените YOUR_CHAT_ID на id вашего чата в Telegram
    const nameInput = document.querySelector('#nameCafe').value;
    const phone = document.querySelector('#phone').value
    const messageInput = document.querySelector('#message').value;
    const currentDateTime = getCurrentDateTime();
    console.log(currentDateTime);
    const products = productName.toString()
    const data = [currentDateTime, nameInput, products, messageInput,phone,  ]
    console.log(data)


    fetch('http://localhost:3000/your-endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                console.log('Data sent successfully');
            } else {
                console.error('Failed to send data');
            }
        })
        .catch(error => {
            console.error('An error occurred:', error);
        });

    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=Кафе:%20${nameInput}%0AПродукт:%20${productName}%0AКоментарий:%20${messageInput}%0AНомер:%20${phone}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            location.reload();
            // Ваш код обработки успешной отправки сообщения
            alert('Ваша сообщение успешно отправлено!')

        })
        .catch(error => {
            console.error('There was a problem sending the message:', error);
            // Ваш код обработки ошибки отправки сообщения
        });

});