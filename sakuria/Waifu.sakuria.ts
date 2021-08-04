import Discord from "discord.js";
import fs from "fs";
import { IRewards, IJSONWaifu, IWaifuRarity, IWaifu } from "../types";

/**
 * Per guild waifu fights that people initiate with a command
 * Waifus have different rarities
 * Rare waifus will reward the players defeating them
 * with more shit
 * @author Geoxor, Cimok
 */
export default class Waifu {
  public name: string;
  public attachment: Discord.MessageAttachment;
  public currentHp: number;
  public maxHp: number;
  public rewards: IRewards;
  public isDead: boolean;
  public rarity: IWaifuRarity;
  public ui: Discord.MessageEmbed;
  private imageFile: string;

  constructor(waifu: IWaifu) {
    this.name = waifu.name;
    this.imageFile = waifu.image;
    this.attachment = new Discord.MessageAttachment(fs.createReadStream(`./assets/waifus/${this.imageFile}`), this.imageFile);
    this.currentHp = waifu.hp;
    this.maxHp = waifu.hp;
    this.rarity = waifu.rarity;
    this.rewards = waifu.rewards;
    this.isDead = false;
    this.ui = this.prepareUi();
  }

  private prepareUi() {
    const embed = new Discord.MessageEmbed();
    embed
      .setColor(this.rarity.color)
      .setTitle(this.name)
      .addField("Rarity", `${this.rarity.emoji} ${this.rarity.name}`, true)
      .setDescription("" + this.maxHp)
      .setImage(`attachment://${this.imageFile}.png`);
    return embed;
  }

  public dealDamage(damage: number) {
    this.currentHp = this.currentHp - damage;
    if (this.currentHp <= 0) this.isDead = true;
  }
}
