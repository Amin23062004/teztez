const express = require('express');
const ExcelJS = require("exceljs");
const server = express();
const port = 3000;

server.use(express.json());

// Middleware для обработки заголовков CORS
server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:63342');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
server.use(express.static('public'));



server.post('/your-endpoint', (req, res) => {
    const receivedData = req.body;
    console.log(receivedData)
    if (receivedData) {
        const ExcelJS = require('exceljs');
        const fs = require('fs');

        // Путь к существующему файлу Excel
        const filePath = 'data.xlsx';

        // Функция для сохранения данных в Excel
        async function saveDataToExcel(data) {
            try {
                // Загрузка существующего файла Excel
                const workbook = new ExcelJS.Workbook();
                await workbook.xlsx.readFile(filePath);

                // Получение активного листа
                const worksheet = workbook.worksheets[0]; // Получение первого листа

                // Добавление данных из формы в файл Excel
                const newRow = worksheet.addRow(data);

                // Сохранение изменений в файле Excel
                await workbook.xlsx.writeFile(filePath);

                console.log('Данные успешно сохранены в файле Excel.');
            } catch (error) {
                console.error('Ошибка при сохранении данных:', error);
            }
        }

        // Пример данных из формы
        const formData = receivedData;

        // Вызов функции для сохранения данных в Excel
        saveDataToExcel(formData);
    } else {
        console.log('Error')
    }
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});