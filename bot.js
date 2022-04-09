const Telegrambot = require('node-telegram-bot-api');

const token = '5230284420:AAEI6uk1H490zlJb-g2j7nzxDGrU31XZP-E';

const bot = new Telegrambot(token, {polling: true});



bot.on('message', (msg)=> {
    var chatId = msg.chat.id
    var msg = msg;
    // console.log('BAteu', msg, chatId)
    console.log('quero ver a msg', msg.text, chatId)
    verificaDrielli(msg.text, chatId);

    return true
})


function verificaDrielli(texto, chatId){
if(texto == 'Drielli')
{
    const msg1 = 'Boa Noite Drielli';
    bot.sendMessage(chatId, msg1)
}
if(texto == '1'){
    const msg3 = 'ta com fome?';
    bot.sendMessage(chatId, msg3)    
}
if(texto == '2'){
    const msg4 = 'vamos fazer janta?';
    bot.sendMessage(chatId, msg4)    
}

if(texto == '3'){
    const msg5 = 'vamos fazer janta?';
    bot.sendMessage(chatId, msg5)    
}

else{
    
    const msg2 = 'Voce nao é a Drielli';
    bot.sendMessage(chatId, msg2)
}
}

