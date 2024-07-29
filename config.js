const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+94 74 155 8775";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_24_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNixcbiAgICAgICAgNzMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjMxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTg0LFxuICAgICAgICA5MixcbiAgICAgICAgNDUsXG4gICAgICAgIDc2LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4LFxuICAgICAgICAyMixcbiAgICAgICAgNDYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDkwLFxuICAgICAgICAyNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDg0LFxuICAgICAgICA4NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjksXG4gICAgICAgIDI1LFxuICAgICAgICA3MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTkzLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDc0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTc1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE2LFxuICAgICAgICA5MixcbiAgICAgICAgMTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUyLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODUsXG4gICAgICAgIDcsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjksXG4gICAgICAgIDg4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTU5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDY5LFxuICAgICAgICAwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjE1LFxuICAgICAgICA0OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjExLFxuICAgICAgICA3LFxuICAgICAgICA5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDc0LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgNixcbiAgICAgICAgMTE2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDczLFxuICAgICAgICAxODQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIwaTBnaWRtMlJKd05oWGtMZW5DOFV4bkw5YTZCdUxsY0FQOVRCTC9tVXBVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzQxNTU4Nzc1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5MkVGQTA3RDJFMTZGMzY0ODQ3NEY5MDhFNkM5NThEQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIyNTIyODNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiM3hvLXQxN0RUZW0yTmJheFdLUS1iUVwiLFxuICBcInBob25lSWRcIjogXCJiYjk1YjlhZC0zNWM2LTRiNTctYTJhZC1hNWEzOTJhM2VhOTNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjcsXG4gICAgICAyMTYsXG4gICAgICA2NyxcbiAgICAgIDY2LFxuICAgICAgMTUyLFxuICAgICAgMjE2LFxuICAgICAgMTczLFxuICAgICAgNDksXG4gICAgICA0NSxcbiAgICAgIDQ4LFxuICAgICAgMTIsXG4gICAgICAxOTUsXG4gICAgICA1OSxcbiAgICAgIDE0MSxcbiAgICAgIDAsXG4gICAgICAxMTYsXG4gICAgICAxMTgsXG4gICAgICA3MCxcbiAgICAgIDE0NSxcbiAgICAgIDI1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTAsXG4gICAgICAyNDcsXG4gICAgICAyMTksXG4gICAgICAyMTUsXG4gICAgICAyMzYsXG4gICAgICAzMCxcbiAgICAgIDE4MixcbiAgICAgIDE1MyxcbiAgICAgIDEwNCxcbiAgICAgIDU1LFxuICAgICAgMjUyLFxuICAgICAgMTAyLFxuICAgICAgNDgsXG4gICAgICA3MyxcbiAgICAgIDM2LFxuICAgICAgMjM0LFxuICAgICAgMTQ3LFxuICAgICAgMTk3LFxuICAgICAgOSxcbiAgICAgIDE4MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBQlJBRTY4QVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NDE1NTg3NzU6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJob3cgc2FkXCIsXG4gICAgXCJsaWRcIjogXCIxMTg4MjUwMzUwMTgzMTI6MTdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTDd4dGVBSEVQSDNuYlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJjdUh6TGJUTzFhWUk5aWp6aU90MWxodzh0cGpSQ0p2Q3dKbjltZ0R0QURjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlU4YlE4Sk4vTXRnMTRzRkExZFBzOEUvMmp3Q28rWTFWWll5d1RNam9jWFhZRXJvY3FxbWp6U2JYdWRrUUhrQ3Q1NVJ4TTFzYXRaV3NIZ3VxNU9PRUFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkZEUGRlUWxRNjBpQkszQVdYeDdlMGNtWFZ4STlXc29vMU5HOUZqMzJZOG96ZDRaNERlMEZzVDE5bUhCVXhpT0E1N2xFbDF1bGd1RXNOelJtTEpGMmlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzQxNTU4Nzc1OjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIyNTIyNzYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKZ0VcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpnRS5qc29uIjogIntcImtleURhdGFcIjpcImMwc1pCTmtnaVBiZ2pPS2NqV000WkpacFhhZExTTmdkMm9OZ3QzS0lLR2s9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA4MTI1NzY2MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyMjUyMjgxMjYxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Udaya-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Udaya",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
