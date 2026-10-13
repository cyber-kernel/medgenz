export type RoomMode =
  | 'modular-ot'
  | 'mgps-pipeline'
  | 'icu-furniture'
  | 'ivf-cleanroom'
  | 'nurse-call'
  | 'turnkey-services';

export type ViewCameraMode = 'free' | 'top-down' | 'surgeon' | 'door';

export type EquipmentCategory =
  | 'surgical'
  | 'lighting'
  | 'anesthesia'
  | 'monitoring'
  | 'pendants'
  | 'facilities'
  | 'icu'
  | 'cleanroom';

export interface DetailedSpecifications {
  materials?: string;
  dimensions?: string;
  standards?: string;
  features: string[];
  technicalNotes?: string;
}

export interface ProductItem {
  id: string;
  markerNumber: number;
  name: string;
  category: EquipmentCategory;
  shortDesc: string;
  detailedSpecs: DetailedSpecifications;
  mounting: 'floor' | 'ceiling' | 'wall';
  isMovable: boolean;
  isRotatable: boolean;
  defaultPosition: { x: number; y: number; z: number };
  defaultRotationY: number; // in radians
  boundingRadius: number;
  heightOffset: number;
}

export interface EquipmentState {
  id: string;
  position: { x: number; y: number; z: number };
  rotationY: number;
  visible: boolean;
  locked: boolean;
}

export interface RoomLayoutConfig {
  id: string;
  name: string;
  description: string;
  roomDimensions: {
    width: number; // meters (X)
    length: number; // meters (Z)
    height: number; // meters (Y)
  };
  equipment: Record<string, {
    position: { x: number; y: number; z: number };
    rotationY: number;
    visible: boolean;
  }>;
}

export interface SavedSceneState {
  version: string;
  timestamp: number;
  layoutId: string;
  roomMode: RoomMode;
  equipmentStates: Record<string, EquipmentState>;
  notes?: string;
}
