// Documentation
// https://deploy-preview-680--discordjs-guide.netlify.app/additional-info/changes-in-v13.html
require("dotenv").config();

// Clear the console
console.clear();

// Cosmetic Imports
import chalk from "chalk";
import {version} from "./package.json";
import quotes from "./assets/quotes.json";

// Print logo
console.log(chalk.hex('#FF33A7')(`              
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
`));

// Say inspirational anime quote
console.log(chalk.hex('#32343F')(`  ${quotes[~~(Math.random() * quotes.length - 1)]}\n`));

// Main import
import Sakuria from "./classes/Sakuria.sakuria";

// Create sakuria
console.log(chalk.hex('#FF90E0')(`  🌸   Creating new Sakuria instance...`));
new Sakuria();  
console.log(chalk.hex('#FF90E0')(`  🌸   Sakuria created\n`));