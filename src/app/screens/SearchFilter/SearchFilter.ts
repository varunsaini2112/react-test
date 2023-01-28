import React, { useMemo, useRef, useState } from 'react';
import renderTemplate from './template';
import { List } from './types';

const SearchFilter: React.FC = () => {
  const [search, setSearch] = useState('');
  const [list, setList] = useState<List[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredList = useMemo(
    () =>
      list.filter((item) => {
        const { value } = item;
        return value.toLowerCase().trim().includes(search.toLowerCase().trim());
      }),
    [search, list]
  );

  function onSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  function onAddButtonClick() {
    const value = inputRef.current?.value;
    if (!value) return;

    const tempItem = { id: list.length, value };
    setList([...list, tempItem]);

    inputRef.current.value = '';
  }

  function onItemClick(item: List) {
    const index = list.findIndex((listItem) => listItem.id === item.id);

    const newList = list
      .slice(0, index)
      .concat(list.slice(index + 1, list.length));

    setList(newList);
  }

  return renderTemplate({
    onAddButtonClick,
    onSearchChange,
    inputRef,
    filteredList,
    onItemClick,
  });
};

export default SearchFilter;
