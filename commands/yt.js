module.exports = {
    name: 'yt',
    description: "sends the youtube link.",
    execute(message, args){
        message.channel.send('https://www.youtube.com/channel/UCFUp-0ShDDNV2ihfG_kMb3g');
    }
}