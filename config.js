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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_43_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDksXG4gICAgICAgIDE1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDc1LFxuICAgICAgICA1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4LFxuICAgICAgICAzOCxcbiAgICAgICAgODQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDgsXG4gICAgICAgIDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE2LFxuICAgICAgICA1NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNixcbiAgICAgICAgNjMsXG4gICAgICAgIDExLFxuICAgICAgICA2NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDUzLFxuICAgICAgICAzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIyNixcbiAgICAgICAgNzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMixcbiAgICAgICAgNTcsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDYxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0LFxuICAgICAgICA4MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM4LFxuICAgICAgICAxNyxcbiAgICAgICAgNTksXG4gICAgICAgIDExNCxcbiAgICAgICAgOTksXG4gICAgICAgIDQ2LFxuICAgICAgICAxNixcbiAgICAgICAgMzEsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc5LFxuICAgICAgICAyOCxcbiAgICAgICAgNixcbiAgICAgICAgMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxLFxuICAgICAgICA1NixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgODQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQyLFxuICAgICAgICA3NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDUyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTM5LFxuICAgICAgICA0LFxuICAgICAgICA4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ2LFxuICAgICAgICA2MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDk4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTU1LFxuICAgICAgICA0MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjIsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTMyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzksXG4gICAgICAgIDU1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDYsXG4gICAgICAgIDY1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNixcbiAgICAgICAgNjMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDcyLFxuICAgICAgICA5MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDMxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDY5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQzLFxuICAgICAgICA0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDksXG4gICAgICAgIDUzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI4LFxuICBcImFkdlNlY3JldEtleVwiOiBcInVOWmNOVnRScmlsb3lEcVFKM1M3SzlCZ1lsamdDa3NDOTQ4alljZ3JXOW89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImtlU0U2a05oVGxTTXZoNWN5Sk5rVHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmFmNzY0NzItNGFjYi00MTI3LWFiNWYtZTg2NjJiYzdiOWM3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg1LFxuICAgICAgODEsXG4gICAgICAxMTYsXG4gICAgICAxMzIsXG4gICAgICAyNTAsXG4gICAgICAxNTcsXG4gICAgICAxNzYsXG4gICAgICAwLFxuICAgICAgNzIsXG4gICAgICAxNTcsXG4gICAgICAxMTIsXG4gICAgICAxMzQsXG4gICAgICAxNTAsXG4gICAgICA0NSxcbiAgICAgIDM0LFxuICAgICAgOTMsXG4gICAgICA1NSxcbiAgICAgIDEzMSxcbiAgICAgIDIyNCxcbiAgICAgIDIxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MyxcbiAgICAgIDE1NSxcbiAgICAgIDIsXG4gICAgICA3MyxcbiAgICAgIDE2MyxcbiAgICAgIDIwNCxcbiAgICAgIDEzOSxcbiAgICAgIDExLFxuICAgICAgMjQ4LFxuICAgICAgOTEsXG4gICAgICAxNjksXG4gICAgICAxODMsXG4gICAgICAyNTQsXG4gICAgICAxNjEsXG4gICAgICAyMTAsXG4gICAgICA0NCxcbiAgICAgIDE4OSxcbiAgICAgIDE4OSxcbiAgICAgIDEwMSxcbiAgICAgIDE0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHNFk1RE5IWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDg3NTk4MzM4OjM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3NDQ5MTkxMjc4NjE0MjozNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKNlYrY01DRUk3QzA3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk5wdXVGa3NoTENJdjdwaUxCZlQ1NkpHTFUzSGo3Qk9FZ0orZFBzVFA3eXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTExuMHhCbjlKT05hTzY4eGxiaE9OMG9DWkRuZzdCa3RBWEhGSnVmSWYwY0lyN1FrYnhjNGEzQjZIaTlubW1LVEErMlhhL2IwM2psRnRkK0tZbmRSQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWHp5MHVZdVhES2ZoejlCY0Vtd0NBbEJYRWI3WkZtN1N0eTVBYlV1d3JTN2RvTHkrSURiYVRoZ1Y4TnA3N3hOd2M1Yk5Ha01kaVRZRDhNanpRa2dtQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDg3NTk4MzM4OjM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDQ0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEwMzI5NzZcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
