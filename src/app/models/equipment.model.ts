export enum EquipmentType {
  LAPTOP_MAC = 'LAPTOP_MAC',
  LAPTOP_WINDOWS = 'LAPTOP_WINDOWS',
  PHONE = 'PHONE',
  MOUSE = 'MOUSE',
  KEYBOARD = 'KEYBOARD',
  MONITOR = 'MONITOR',
  HEADSET = 'HEADSET',
  PRINTER = 'PRINTER',
  CHARGER = 'CHARGER',
}

export interface Equipment {
  id: string;
  name: string;
  type: EquipmentType;
}
