const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'bee20bed87',
}
//======================================//

global.wm = '<<ꪀꫀ᥊ꪊ𝘴ꪀ᭙>>🇮'
global.ucpn = ''

//================= Url =================//
global.linkgc = 'https://chat.whatsapp.com/'
global.linkig = 'https://www.instagram.com/tv/Cdm-WXEp26v/?igshid=YmMyMTA2M2Y='
global.linkyt = 'https://youtube.com/channel/UCqoUjPvDdb0kjXNYdvPPpHQ'
global.linkfb = 'https://facebook.com'
global.web = 'https://mbo254.github.io/profile.github.io/'
global.web1 = 'https://github.com/nexusNw'
global.linkgh = 'https://github.com/nexusNw/Sukuna'

global.session = process.env.SESSION_ID|| ''
global.titlink = 'Folllow me on Instagram'
global.bodlink = 'Z3NON.Z'
// Other
global.watermark = 'ᑎ3᙭ᑌ5-51ᖇ..<33'
global.owner = ['918129624395']  //Your phone number here
global.premium = ['918129624395'] //premium number here
global.packname = 'Dont Steal---|' //Sticker exif/Packname
global.author = 'ᑎ3᙭ᑌ5-ᘔ3ᖇ' //sticker exif/author
global.sessionName = 'session'
global.prefa = ['#','!','.','🐦',',','*'] //prefix
global.sp = '❄︎'
global.mess = {
    success: 'ITՏ ՏᑌᑕᑕᗴՏՏ,ᴅeᴛᴛᴀʙᴀʏᴏ^_^',
    admin: 'Special Features for Admins!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'Konayaru❌,Bot Owner Special Features',
    group: 'Features Used For Groups only!',
    private: 'Features Used For Private Chat only!',
    bot: 'Bot Number Users Special Feature',
    wait: 'Its loading, baka...',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity",
    free: 15
}
global.thumb = fs.readFileSync('./lib/Sukunax.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
