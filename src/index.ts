import { data } from "./data";
// import "./style.css";
import "./base.css";
import "./game.css";
import "./basic_components.css";
import {
  DocumentElements,
  getEl,
  Timer,
  load_player_data,
  save_player_data
} from "./util";

const objects: DocumentElements = {
  dev: {
    free_money: getEl("dev.free-money")
  }
};

const display_interval: Timer = setInterval(function () {
  const dolla_display: HTMLElement | null = getEl("d.dolla");
  if (dolla_display) {
    dolla_display.textContent = data.dolla.toLocaleString();
  }
}, 50);
const autosave_interval: Timer = setInterval(() => {
  save_player_data();
}, 2500);
if (objects.dev.free_money)
  objects.dev.free_money.onclick = () => {
    data.dolla++;
  };
load_player_data();
