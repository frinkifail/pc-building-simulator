enum PCPartsAvailable {
  CPU = 0,
  RAM = 1,
  Disk = 2,
  GPU = 3
}
const PCPartsCPUAvailable: Object = {
  Baller: { power: 1000, rating: 500 },
  Imposter: { power: 6969, rating: 4200 }
};
const PCPartsRAMAvailable: Object = {
  BingChilling: { size: 8, rating: 5000 },
  NotChilling: { size: 4, rating: 4500 }
};
const PCPartsDiskAvailable: Object = {
  BigChungus: { size: 600, rating: 7001 }
};
const PCPartsGPUAvailable: Object = {
  IShowSpeed: { ramsize: 16, power: 9001, rating: 4999 }
};
interface PCPartsType {
  PCParts: typeof PCPartsAvailable;
  CPU: Object;
  RAM: Object;
  Disk: Object;
  GPU: Object;
}
export const PCParts: PCPartsType = {
  PCParts: PCPartsAvailable,
  CPU: PCPartsCPUAvailable,
  RAM: PCPartsRAMAvailable,
  Disk: PCPartsDiskAvailable,
  GPU: PCPartsGPUAvailable
};
interface PBSv1Crypto {
  catcoins: number;
}
export interface PBSv1Save {
  dolla: number;
  crypto: PBSv1Crypto;
  inventory: PBSv1Inventory;
}
interface PBSv1Inventory {
  CPU: Object;
  RAM: Object;
  Disk: Object;
  GPU: Object;
}
export const data: PBSv1Save = {
  dolla: 0,
  crypto: {
    catcoins: 0
  },
  inventory: {
    CPU: {},
    RAM: {},
    Disk: {},
    GPU: {}
  }
};
