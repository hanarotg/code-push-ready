/*
For more information, please see official document in MS blog
https://learn.microsoft.com/ko-kr/appcenter/distribution/codepush/rn-get-started
*/

import fs from "fs";
import { projectDir, projectName } from "./props.js";
import chalk from "chalk";

const updateAndroidSettingsGradle = () => {
  const adr = `${projectDir}/android/settings.gradle`;
  const content = `\ninclude ':app', ':react-native-code-push'\nproject(':react-native-code-push').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-code-push/android/app')`;

  console.log(chalk.blue(`[ Updating ] ${adr}`))

  fs.readFile(adr, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading ${adr}: ${err}`);
      return;
    }

    const modifiedContent = data + content;

    fs.writeFile(adr, modifiedContent, "utf8", (err) => {
      if (err) {
        console.error(`Error writing ${adr}: ${err}`);
        return;
      }
      console.log(`Successfully modified ${adr}`);
    });
  });
};

const updateAndroidBuildGradle = () => {
  const adr = `${projectDir}/android/app/build.gradle`;
  const content = `\napply from: "../../node_modules/react-native-code-push/android/codepush.gradle"`;

  console.log(chalk.blue(`[ Updating ] ${adr}`))

  fs.readFile(adr, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading ${adr}: ${err}`);
      return;
    }

    const modifiedContent = data + content;

    fs.writeFile(adr, modifiedContent, "utf8", (err) => {
      if (err) {
        console.error(`Error writing ${adr}: ${err}`);
        return;
      }
      console.log(`Successfully modified ${adr}`);
    });
  });
};

const updateAndroidMainApplication = () => {
  const adr = `${projectDir}/android/app/src/main/java/com/${projectName}/MainApplication.java`;
  const content1 = `\n// 1. Import the plugin class.\nimport com.microsoft.codepush.react.CodePush;`;
  const content2 = `\n// 2. Override the getJSBundleFile method to let
  // the CodePush runtime determine where to get the JS
  // bundle location from on each app start
  @Override
  protected String getJSBundleFile() {
      return CodePush.getJSBundleFile();
  }`;

  console.log(chalk.blue(`[ Updating ] ${adr}`))

  fs.readFile(adr, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading ${adr}: ${err}`);
      return;
    }

    var modifiedContent = "";
    const lines = data.split('\n')

    for(const line of lines){
      if (line.includes(`public class MainApplication`)) {
        modifiedContent += content1 + "\n"
      }
      else if(line.includes(`new DefaultReactNativeHost(this) {`)){
        modifiedContent += line + "\n" + content2 + "\n"
        continue
      }

      modifiedContent += line + "\n"
    }

    fs.writeFile(adr, modifiedContent, "utf8", (err) => {
      if (err) {
        console.error(`Error writing ${adr}: ${err}`);
        return;
      }
      console.log(`Successfully modified ${adr}`);
    });
  });

};

// APPCENTER cli
const updateAndroidStringDeploymentKey = () => {};

export { updateAndroidSettingsGradle, updateAndroidBuildGradle, updateAndroidMainApplication };
