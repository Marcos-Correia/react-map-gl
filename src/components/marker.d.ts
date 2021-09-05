import {ReactElement} from 'react';
import type {DraggableControlProps} from './draggable-control';

export type MarkerProps = DraggableControlProps & {
  className?: string,
  longitude: number,
  latitude: number,
  onClick?: (evt: CallbackEvent) => void
};

export default function Marker(props: MarkerProps): ReactElement;
