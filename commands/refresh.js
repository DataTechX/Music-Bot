
exports.run = async (client, message) => {

    message.channel.send({
        embed: {
            color: '#fffa00',
            title: 'บอทกำลังทำการรีบูต',
            Timeout: 10000,
            /*author: { name: 'Maki Manual' },*/
            /*footer: { text: 'https://discord.gg/WmgsVajD' },*/
            //footer: { text: `🕛 Request By :  ${message.author.username}`},
            /*fields: [
                { name: 'ทั่วไป', value: 'กำลังอยู่ระหว่างการพัฒนาบอทอยู่' },
                { name: 'พิเศษ', value: 'สำหรับพรีเมี่ยมเท่านั้น ติดต่อได้ที่ LYNN_#6590 ขอบคุณครับ' },
                { name: 'เพลง', value: '141111' },
            ],*/
            //timestamp: new Date(),
            description: '0:00 ได้ทำการรีบูตบอทเรียบร้อย!!'
        },
        
    });

};