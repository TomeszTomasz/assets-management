import {ChangeDetectionStrategy, Component, input} from '@angular/core'
import {Equipment, EquipmentType} from '../../models/equipment.model'
import {MatChip, MatChipAvatar, MatChipSet} from '@angular/material/chips'
import {MatIcon} from '@angular/material/icon'

@Component({
  selector: 'app-equipment-list',
  imports: [MatChip, MatChipSet, MatIcon, MatChipAvatar],
  templateUrl: './equipment-list.component.html',
  styleUrl: './equipment-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EquipmentListComponent {
  equipment = input<Equipment[] | null>()

  ICON_EQUIPMENT_TYPE_MAP: Record<EquipmentType, string> = {
    [EquipmentType.LAPTOP_MAC]: 'laptop_mac',
    [EquipmentType.LAPTOP_WINDOWS]: 'laptop_windows',
    [EquipmentType.PHONE]: 'smartphone',
    [EquipmentType.MOUSE]: 'mouse',
    [EquipmentType.KEYBOARD]: 'keyboard',
    [EquipmentType.MONITOR]: 'monitor',
    [EquipmentType.HEADSET]: 'headset_mic',
    [EquipmentType.PRINTER]: 'printer',
    [EquipmentType.CHARGER]: 'power'
  }

}
