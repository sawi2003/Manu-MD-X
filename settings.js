//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                    𝗠𝗔𝗡𝗨-𝗠𝗗  𝐁𝐎𝐓                                                 //
//                                                                                                      //
//                                         Ｖ：7.0                                                       //

//███╗░░░███╗░█████╗░███╗░░██╗██╗░░░██╗
//████╗░████║██╔══██╗████╗░██║██║░░░██║
//██╔████╔██║███████║██╔██╗██║██║░░░██║
//██║╚██╔╝██║██╔══██║██║╚████║██║░░░██║
//██║░╚═╝░██║██║░░██║██║░╚███║╚██████╔╝
//╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝░╚═════╝░

//███╗░░░███╗██████╗░
//████╗░████║██╔══██╗
//██╔████╔██║██║░░██║
//██║╚██╔╝██║██║░░██║
//██║░╚═╝░██║██████╔╝
//╚═╝░░░░░╚═╝╚═════╝░

//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : Sawi-MD
//  * @author : Sawi Official
// 
//* @description : Sawi-MD ,A Multi-functional whatsapp user bot.
//*
//*
//base by Sawi Official
//GitHub: @sawi2003
//WhatsApp: +94767969374
//
//   * Created By Github: sawi official7.
//   * Credit To sawi Official
//   * © 2024 MANU-MD-V7.
// ⛥┌┤
// */

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Manu-MD&CElwhKLa#b6aMu8_-k12h6vbafp3E1dPJH_VChlUCDD0xDzUyl60", // ඔයාගෙ සෙසන් එක දාගන්න / Put Your Session_id Here !!! 💚
MONGODB: process.env.MONGODB || "mongodb+srv://manulwijethilaka42:manumd123@cluster0.le0te.mongodb.net/", // ඔයාගෙ Mongodb Url එක දාගන්න / Put Your Mongodb Url Here !!! 💚
};
