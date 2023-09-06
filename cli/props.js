import path from "path";
import { fileURLToPath } from "url";

const moduleURL = import.meta.url;
const modulePath = fileURLToPath(moduleURL);
const currentModuleDirectory = path.dirname(modulePath);
const projectDir = path.resolve(currentModuleDirectory, "../../..");

const projectNameIndex = projectDir.lastIndexOf("/");
const projectName = projectDir.slice(projectNameIndex + 1);

export { projectDir, projectName };
