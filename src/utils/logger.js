const fs = require('fs');
const path = require('path');

// camimho do arquivo de log
const logFilePath = path.join(__dirname, '../logs/webhook.log');

// Função para salvar os logs no arquivo
const logToFile = (data) => {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${data}\n`;

    // adiciona o log ao arquivo
    fs.appendFileSync(logFilePath, logMessage, 'utf8');
};

module.exports = {
    logToFile,
}