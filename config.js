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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_25_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjEwLFxuICAgICAgICA3MixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDk0LFxuICAgICAgICAzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDM5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTksXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODQsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDUxLFxuICAgICAgICA4NCxcbiAgICAgICAgODksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODUsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1MCxcbiAgICAgICAgMjksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAwLFxuICAgICAgICAxODYsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODUsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDc3LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NixcbiAgICAgICAgNzcsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDUxLFxuICAgICAgICAxODIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTksXG4gICAgICAgIDcsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDMxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDgsXG4gICAgICAgIDUwLFxuICAgICAgICA4NixcbiAgICAgICAgMjU0LFxuICAgICAgICA0MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDQyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTcwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjIyLFxuICAgICAgICA3MixcbiAgICAgICAgMzcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5MixcbiAgICAgICAgOTEsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM0LFxuICAgICAgICA2LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc0LFxuICAgICAgICA2OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDg3LFxuICAgICAgICAwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA0LFxuICAgICAgICA5NixcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDc1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDY3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTA4LFxuICAgICAgICA3MyxcbiAgICAgICAgODMsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDksXG4gICAgICAgIDY2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJoRk1MVEU2WTZ0RFJTV1M1bGl2UGlpOTB6MUVmaVRwSXN2Ky9NbzlvWlFVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQRy14dlVDeVJ3dVdZRFdEZzZPOEd3XCIsXG4gIFwicGhvbmVJZFwiOiBcImFhYWEyMjZiLTczNzMtNDI5NS05NzY0LWZjNTQxZGYxMWNlZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODYsXG4gICAgICAxMyxcbiAgICAgIDE5NixcbiAgICAgIDI0MCxcbiAgICAgIDIwMyxcbiAgICAgIDEyOSxcbiAgICAgIDE5MSxcbiAgICAgIDYxLFxuICAgICAgMTkyLFxuICAgICAgMzYsXG4gICAgICAxMzYsXG4gICAgICAxNDksXG4gICAgICAzNyxcbiAgICAgIDE4MixcbiAgICAgIDIwOSxcbiAgICAgIDk2LFxuICAgICAgNTQsXG4gICAgICA0NyxcbiAgICAgIDM4LFxuICAgICAgNzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQxLFxuICAgICAgNDgsXG4gICAgICA0NSxcbiAgICAgIDE0NCxcbiAgICAgIDExMyxcbiAgICAgIDEwNixcbiAgICAgIDIyMCxcbiAgICAgIDg5LFxuICAgICAgNjYsXG4gICAgICAyMDcsXG4gICAgICAyMTMsXG4gICAgICAxNzQsXG4gICAgICA5LFxuICAgICAgMTUsXG4gICAgICAzMCxcbiAgICAgIDE5MCxcbiAgICAgIDEzNixcbiAgICAgIDE2NCxcbiAgICAgIDQ1LFxuICAgICAgNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOUhWRVA3NkhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzQxNTU4Nzc1OjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiaG93IHNhZFwiLFxuICAgIFwibGlkXCI6IFwiMTE4ODI1MDM1MDE4MzEyOjE4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0wveHRlQUhFT25Kb0xVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiY3VIekxiVE8xYVlJOWlqemlPdDFsaHc4dHBqUkNKdkN3Sm45bWdEdEFEYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI2eDdKaTBuckw3UGJGc0JuSEdOLzIwOGcvcHM1cHAwd1FQOUNiemxiOVV5Q3lIcXQ0RGR5bk91dTFiSHZJSjdGeWpJblRTc3BoMFJ4ZWpiSFlQQjZBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJFWkhlTXZLaWl0d01TNkVGYjBuMkZFL1haVzZVZlZ4Y0NtZjc0aThpNUt5RTJJUjBEVHdNeXB1MG1EM3JpQWVxOEp1SkZNZFBia1lXUTgwNjRLWGNBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc0MTU1ODc3NToxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMjk1NTMzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSEM5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIQzkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJzRnBhRk9GNFZzSWVDT0ZBNkFEenhGaFFDbkFERGtJVEJFenB1ZHRuSTNjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwODEyNTc2NjMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjI5NTUzNzA0NVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "udaya-md",
  packname: process.env.PACK_NAME || "udaya-MD",
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
