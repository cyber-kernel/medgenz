import { EquipmentState, SavedSceneState, RoomMode } from '@/types/theatre';
import { MEDGENZ_PRODUCTS } from '@/data/3d-ot/products';
import { OT_LAYOUT_PRESETS } from '@/data/3d-ot/layouts';

const STORAGE_KEY = 'medgenz_3d_ot_custom_layout_v2';

export function getInitialEquipmentStates(layoutId = 'standard-ot'): Record<string, EquipmentState> {
  const preset = OT_LAYOUT_PRESETS[layoutId] || OT_LAYOUT_PRESETS['standard-ot'];
  const states: Record<string, EquipmentState> = {};

  MEDGENZ_PRODUCTS.forEach((prod) => {
    const presetConfig = preset.equipment[prod.id];
    states[prod.id] = {
      id: prod.id,
      position: presetConfig ? { ...presetConfig.position } : { ...prod.defaultPosition },
      rotationY: presetConfig ? presetConfig.rotationY : prod.defaultRotationY,
      visible: presetConfig ? presetConfig.visible : true,
      locked: false,
    };
  });

  return states;
}

export function saveLayoutToStorage(
  layoutId: string,
  roomMode: RoomMode,
  equipmentStates: Record<string, EquipmentState>
): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const data: SavedSceneState = {
      version: '2.0.0',
      timestamp: Date.now(),
      layoutId,
      roomMode,
      equipmentStates,
      notes: 'User customized arrangement from MedGenz 3D OT configurator',
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch (err) {
    console.error('Failed to save layout to localStorage:', err);
    return false;
  }
}

export function loadLayoutFromStorage(): SavedSceneState | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as SavedSceneState;
    if (parsed && parsed.equipmentStates) {
      return parsed;
    }
  } catch (err) {
    console.error('Failed to parse saved layout:', err);
  }
  return null;
}

export function exportLayoutAsJson(
  layoutId: string,
  roomMode: RoomMode,
  equipmentStates: Record<string, EquipmentState>
): void {
  if (typeof window === 'undefined') return;
  const data: SavedSceneState = {
    version: '2.0.0',
    timestamp: Date.now(),
    layoutId,
    roomMode,
    equipmentStates,
    notes: 'MedGenz Modular OT Configuration Export',
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `medgenz-ot-layout-${layoutId}-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function validateAndImportJson(jsonText: string): {
  success: boolean;
  data?: SavedSceneState;
  error?: string;
} {
  try {
    const parsed = JSON.parse(jsonText);
    if (!parsed || typeof parsed !== 'object') {
      return { success: false, error: 'Invalid JSON file structure.' };
    }

    if (!parsed.equipmentStates || typeof parsed.equipmentStates !== 'object') {
      return { success: false, error: 'Configuration lacks valid equipment state mapping.' };
    }

    const validStates: Record<string, EquipmentState> = {};
    for (const [id, state] of Object.entries(parsed.equipmentStates)) {
      const s = state as any;
      if (
        s &&
        s.position &&
        typeof s.position.x === 'number' &&
        typeof s.position.y === 'number' &&
        typeof s.position.z === 'number' &&
        !isNaN(s.position.x) &&
        !isNaN(s.position.z)
      ) {
        validStates[id] = {
          id,
          position: {
            x: Math.max(-5, Math.min(5, s.position.x)),
            y: Math.max(0, Math.min(4, s.position.y)),
            z: Math.max(-5, Math.min(5, s.position.z)),
          },
          rotationY: typeof s.rotationY === 'number' ? s.rotationY : 0,
          visible: s.visible !== false,
          locked: Boolean(s.locked),
        };
      }
    }

    return {
      success: true,
      data: {
        version: parsed.version || '2.0.0',
        timestamp: parsed.timestamp || Date.now(),
        layoutId: parsed.layoutId || 'standard-ot',
        roomMode: parsed.roomMode || 'modular-ot',
        equipmentStates: validStates,
      },
    };
  } catch (err: any) {
    return { success: false, error: err.message || 'Malformed JSON file.' };
  }
}
