#! /usr/bin/env node
import { updateAndroidSettingsGradle, updateAndroidMainApplication, updateAndroidBuildGradle } from "./cli/android.js";

updateAndroidSettingsGradle();
updateAndroidBuildGradle();
updateAndroidMainApplication();
