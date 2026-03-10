type Editors = "vscode"
  | "vscode-insiders"
  | "cursor"
  | "webstorm"
  | "intellij-idea"
  | "sublime-text"
  | "zed"
  | "atom"
  | "vim"
  | "nvim";

export type FileExplorerOptions = {
  rootPath?: string;
  hiddenFiles?: Array<string>;
  respectGitIgnore?: boolean;
  defaultIde?: Editors;
};
