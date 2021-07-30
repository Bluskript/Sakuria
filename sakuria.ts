// Documentation
// https://deploy-preview-680--discordjs-guide.netlify.app/additional-info/changes-in-v13.html
require("dotenv").config();

// Clear the console
console.clear();

// Cosmetic Imports
import chalk from "chalk";
import { version } from "./package.json";
import logger from "./classes/Logger.sakuria";

// Print logo
console.log(
  chalk.hex("#FF33A7")(`              
          -%#-          
         *@@@@*         
        -@@%%@@-        
  :====:-@@@@@@=:====:  
*@@@@@@@@*+##@#+@@@@@@@*
 #@@@#@%##%.++=#%@*@@@#  by Geoxor 🌸                v${version}
  -*@@%***-  :%@@@@@*-  .▄▄ ·  ▄▄▄· ▄ •▄ ▄• ▄▌▄▄▄  ▪   ▄▄▄· 
     :#@@%+-%+****:     ▐█ ▀. ▐█ ▀█ █▌▄▌▪█▪██▌▀▄ █·██ ▐█ ▀█ 
    -@@@@%@-@@%@@@@-    ▄▀▀▀█▄▄█▀▀█ ▐▀▀▄·█▌▐█▌▐▀▀▄ ▐█·▄█▀▀█ 
    #@@%%@@=+@@@%@@#    ▐█▄▪▐█▐█ ▪▐▌▐█.█▌▐█▄█▌▐█•█▌▐█▌▐█ ▪▐▌ 
    #@@@@*:  :#@@@@#     ▀▀▀▀  ▀  ▀ ·▀  ▀ ▀▀▀ .▀  ▀▀▀▀ ▀  ▀ 
`)
);

// Say inspirational anime quote
logger.sakuria.inspiration();

// Main import
import Sakuria from "./classes/Sakuria.sakuria";

// Create sakuria
logger.sakuria.creating();
new Sakuria();
logger.sakuria.created();
