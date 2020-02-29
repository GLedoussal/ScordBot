const Command = require('./command');
const Logs = require('../actions/logs');

module.exports = class Pong extends Command {
    static match(message) {
        return message.content.startsWith(process.env.PREFIX + 'pong');
    }

    static action(message) {

        // Secret command.

        message.channel.send('Non.\n' +
            'https://amp.businessinsider.com/images/58a7024e01fe580f018b5282-960-639.jpg');
        Logs.snap('[Pong] Non.');
    }
};