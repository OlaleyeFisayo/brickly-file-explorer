export type FileType = {
  type: "file";
  extension: string;
};

export type DirectoryType = {
  type: "directory";
  expanded: boolean;
  childExpanded: boolean;
  children: FileTreeNode[];
};

export type FileTreeNode = {
  name: string;
  path: string;
  parentPath: string;
  absolutePath: string;
  key: string;
} & (FileType | DirectoryType);
