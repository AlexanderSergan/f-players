import * as migration_20250102_162640 from './20250102_162640';
import * as migration_20250102_163101_initial from './20250102_163101_initial';

export const migrations = [
  {
    up: migration_20250102_162640.up,
    down: migration_20250102_162640.down,
    name: '20250102_162640',
  },
  {
    up: migration_20250102_163101_initial.up,
    down: migration_20250102_163101_initial.down,
    name: '20250102_163101_initial',
  },
];
