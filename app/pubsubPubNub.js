const PubNub = require('pubnub')

const credentials = {
    publishKey: "pub-c-21ea6ce9-bc5a-47dd-b9d8-5989019b1a86",
    subscribeKey: "sub-c-4f3d87f8-78cb-11e9-81d5-56c3556875f9",
    secretKey: "sec-c-OGNhOWFlYTAtMGYyOS00YWJlLTk0YjAtZjE2Mzk5N2I5YmM0"
}

const CHANNELS = {
    TEST: 'TEST',
    BLOCKCHAIN: 'BLOCKCHAIN'
}

class PubSub {
    constructor() {
        this.pubnub = new PubNub(credentials);

        this.pubnub.subscribe({ channels: [Object.values(CHANNELS)] });

    this.pubnub.addListener(this.listener());
    }


    listener() {
        return {
            message: messageObject => {
                const { channel, message } = messageObject;

                console.log(`Message received. Channel: ${channel}. Message: ${message}`);
            }
        }
    }

    publish({ channel, message }) {

        this.pubnub.publish({ message, channel });
    }
}


module.exports = PubSub