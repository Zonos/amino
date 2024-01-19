import type { ComponentType, ExoticComponent } from 'react';

export type ReactComponent<T> = ComponentType<T> | ExoticComponent<T>;
