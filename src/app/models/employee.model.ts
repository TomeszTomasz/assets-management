import {Equipment} from './equipment.model'

export enum EmployeeStatus {
  ACTIVE = 'ACTIVE',
  AWAITING_CONFIRMATION = 'AWAITING_CONFIRMATION',
  OFFBOARDED = 'OFFBOARDED'
}

export interface Employee {
  id: string;
  name: string;
  department: string;
  status: EmployeeStatus;
  email: string;
  equipment: Equipment[];
}

export interface EmployeeStatusUpdateEvent {
  employee: Employee;
  status: EmployeeStatus
}
