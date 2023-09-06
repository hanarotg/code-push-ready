import {
  updateAndroidSettingsGradle,
  updateAndroidMainApplication,
  updateAndroidBuildGradle,
} from "./android.js";

export const init = () => {
  updateAndroidSettingsGradle();
  updateAndroidBuildGradle();
  updateAndroidMainApplication();
};
