import { ChangeEvent, RefObject } from 'react';

export interface RenderTemplateProps {
  onAddButtonClick: () => void;
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  inputRef: RefObject<HTMLInputElement>;
  filteredList: List[];
  onItemClick: (e: List) => void;
}

export interface List {
  id: number;
  value: string;
}

export interface ListItemProps {
  item: List;
  onClick: (e: List) => void;
}