const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_55_11_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyOSxcbiAgICAgICAgNyxcbiAgICAgICAgODcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxODYsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE3LFxuICAgICAgICA5LFxuICAgICAgICA3NixcbiAgICAgICAgODcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTU5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjM3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDY3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTksXG4gICAgICAgIDMsXG4gICAgICAgIDY1LFxuICAgICAgICA1M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTcxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTM3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM0LFxuICAgICAgICA2NSxcbiAgICAgICAgNjksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTI0LFxuICAgICAgICA4OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTkzLFxuICAgICAgICA4NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDU2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxLFxuICAgICAgICA2MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDk4LFxuICAgICAgICAxNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDMyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgzLFxuICAgICAgICA0NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjUwLFxuICAgICAgICA2OCxcbiAgICAgICAgODIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIsXG4gICAgICAgIDIzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjEwLFxuICAgICAgICA3NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjU1LFxuICAgICAgICA5NSxcbiAgICAgICAgOTksXG4gICAgICAgIDMwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjA2LFxuICAgICAgICA5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY1LFxuICAgICAgICA3OSxcbiAgICAgICAgODUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTIwLFxuICAgICAgICA0MyxcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDM0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjM1LFxuICAgICAgICA4NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDc3LFxuICAgICAgICA2MCxcbiAgICAgICAgOTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE5LFxuICAgICAgICA0NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDk2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE1MixcbiAgICAgICAgODMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDM5LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE3LFxuICAgICAgICA1LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJNSEFZVE5TcDhzQUpodHpVVllrMjJZRFh5VkdDcFFpKzZvTkF3cEhYRWpvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzAyNTUyNjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4M0JCMkRENjQwQkMwNkRGQjgxNTc1MzA2MTE4OUVDRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzIyNjkzMDJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTjZjWkhtcWdSU0taY0Fuck5WRVpKd1wiLFxuICBcInBob25lSWRcIjogXCJlNzBmZjQyYy1mOGJmLTRmYTQtYWIyYy0yYTI2ODk3ZmFlMDRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUxLFxuICAgICAgMzgsXG4gICAgICAxMDgsXG4gICAgICA5NCxcbiAgICAgIDIyMCxcbiAgICAgIDIyMixcbiAgICAgIDIwMSxcbiAgICAgIDE2NixcbiAgICAgIDYsXG4gICAgICAyNDUsXG4gICAgICAxMjQsXG4gICAgICA5MCxcbiAgICAgIDIzNSxcbiAgICAgIDE4NSxcbiAgICAgIDIyNCxcbiAgICAgIDI1MixcbiAgICAgIDIxNyxcbiAgICAgIDEzMyxcbiAgICAgIDExNyxcbiAgICAgIDk5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NSxcbiAgICAgIDE0MyxcbiAgICAgIDE5MSxcbiAgICAgIDIwMixcbiAgICAgIDIwMSxcbiAgICAgIDE1NSxcbiAgICAgIDUzLFxuICAgICAgMTg0LFxuICAgICAgMTk0LFxuICAgICAgMjM5LFxuICAgICAgMjMyLFxuICAgICAgNTMsXG4gICAgICAxMDEsXG4gICAgICA0NCxcbiAgICAgIDcwLFxuICAgICAgMTAwLFxuICAgICAgMTAzLFxuICAgICAgNDksXG4gICAgICA3LFxuICAgICAgMTcyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZWTEJKV01TXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcwMjU1MjYxMzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0NjEwNzA0NDQwOTUwNDoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xmWGw5NEhFTzJwZ2JvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidFI2ckE2SWJpQ1BNWWhhZ3VVNGNKV1lFWUhydjY4c09KdDFvbTVyeUJSQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ2WW83ZXhyMm4wRzdONlVPb3daYVFreE1jc0xnTmtFR1Nud0ROQjl2dzJLemVEbWIwZFNCVEpiU2VHeG10bGhrU1dvaDAxRDRZMGVIT053UlVXc21Ddz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJtSDBYbWQzcUZvclYyUFptRGxadkYzWFRYdnhjNk9zUXIvbkk3TWkrc0JDY0VNUFIxNk1uVGZJbHNQY1hJcUlYZ0FrRlMwdnozVXJOVjhhKy9BcURqdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcwMjU1MjYxMzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyMjY5Mjk3XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
