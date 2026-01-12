import vitalMonitor1 from "../../assets/photos/vital-monitor-thumbnail.png";
import arkibo1 from "../../assets/photos/arkibo-thumbnail.png";
import silid1 from "../../assets/photos/silid-thumbnail.png";
import prioritize1 from "../../assets/photos/prioritize-thumbnail.png";
import automation1 from "../../assets/photos/automation-thumbnail-1.png";

export interface ImageAsset {
  id: number;
  src: string;
}

export const vitalMonitorImages: ImageAsset[] = [{ id: 1, src: vitalMonitor1 }];

export const arkiboImages: ImageAsset[] = [{ id: 1, src: arkibo1 }];

export const movieWebsiteImages: ImageAsset[] = [];

export const automatedLoginImages: ImageAsset[] = [{ id: 1, src: automation1 }];

export const silidImages: ImageAsset[] = [{ id: 1, src: silid1 }];

export const prioritizeImages: ImageAsset[] = [{ id: 1, src: prioritize1 }];
