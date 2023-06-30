import { data, PBSv1Save } from "./data";
/**
 * Retrieves an HTML element by its ID.
 *
 * @param id - The ID of the element to retrieve.
 * @returns The HTML element with the specified ID, or null if not found.
 */
export function getEl(id: string): HTMLElement | null {
  return document.getElementById(id);
}
interface dev_elms {
  free_money: HTMLElement | null;
}
export interface DocumentElements {
  dev: dev_elms;
}
export function load_player_data(): void {
  setTimeout(() => {
    const val: string | null = localStorage.getItem("pbs/v1/data");
    let obj: PBSv1Save = data;
    if (val) {
      obj = JSON.parse(val);
    } else {
    }
    if (obj !== data) {
      data.dolla = obj.dolla;
      data.crypto = obj.crypto;
      data.inventory = obj.inventory;
    }
  }, 500);
}
export function save_player_data(): void {
  localStorage.setItem("pbs/v1/data", JSON.stringify(data));
}
export type Timer = NodeJS.Timer;
