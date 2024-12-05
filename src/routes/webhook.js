const fs = require('fs');
const path = require('path');

// Caminho do arquivo de log
const logFilePath = path.join(__dirname, '../logs/webhook.log');

// Função para salvar os logs no arquivo
const logToFile = (data) => {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${JSON.stringify(data)}\n`;

    // Adiciona o log ao arquivo com tratamento de erros
    fs.appendFile(logFilePath, logMessage, 'utf8', (err) => {
        if (err) {
            console.error('Erro ao escrever no arquivo de log:', err);
        }
    });
};

module.exports = {
    logToFile,
};