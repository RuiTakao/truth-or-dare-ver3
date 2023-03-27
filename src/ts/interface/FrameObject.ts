export interface FrameObject {
  get getFrame(): HTMLDivElement;
  attach(): void;
  destroy(): void;
}
