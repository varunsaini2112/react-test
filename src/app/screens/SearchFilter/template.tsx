import { ListItemProps, RenderTemplateProps } from './types';
import './styles.scss';

const renderTemplate = (props: RenderTemplateProps) => {
  const {
    onAddButtonClick,
    onSearchChange,
    inputRef,
    filteredList,
    onItemClick,
  } = props;

  return (
    <div>
      <div>
        <input
          className="searchBar"
          type="search"
          onChange={onSearchChange}
          placeholder="Search here"
        />
      </div>
      <div>
        <input
          className="searchBar"
          type="search"
          ref={inputRef}
          placeholder="Enter your text here..."
        />

        <input
          className="searchButton"
          type="button"
          value="Add Item"
          onClick={onAddButtonClick}
        />
      </div>
      <div style={{ margin: '8px', padding: '8px' }}>
        {filteredList.map((item, index) => (
          <ListItem item={item} onClick={onItemClick} key={index} />
        ))}
      </div>
    </div>
  );
};

export default renderTemplate;

const ListItem = (props: ListItemProps) => {
  const { item, onClick } = props;
  const { value } = item;
  return (
    <div
      data-testid="list-item"
      className="listItem"
      onClick={() => onClick(item)}
    >
      {value}
    </div>
  );
};
