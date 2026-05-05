import { cd } from "./cd.ts";
import { ls } from "./ls.ts";
import { mkdir } from "./mkdir.ts";
import { pwd } from "./pwd.ts";
import { touch } from "./touch.ts";

export const shellCommands = {
  "cd": cd,
  "ls": ls,
  "mkdir": mkdir,
  "pwd": pwd,
  "touch": touch,
};
