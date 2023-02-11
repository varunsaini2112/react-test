import './ToDoList.styles.scss';
import { ListItemProps, RenderTemplateProps } from './types';

const renderTemplate = (props: RenderTemplateProps) => {
  const { list, task, disabled, onPressAddButton, handleInputChange } = props;
  return (
    <div className="mainContainer">
      <div className="subContainer">
        <div className="headerText">To Do List</div>

        <div className="inputFieldContainer">
          <input
            type="text"
            className="inputField"
            placeholder="Do you have a task?"
            value={task.value}
            onChange={handleInputChange}
          />
          <button
            className="addTaskButton"
            onClick={() => onPressAddButton()}
            disabled={disabled}
          >
            Add a task
          </button>
        </div>

        {list.length ? (
          list.map((taskItem, index) => (
            <ListItem item={taskItem} index={index} key={taskItem.id} />
          ))
        ) : (
          <div className="emptyMessageContainer">No tasks added</div>
        )}
      </div>
    </div>
  );
};

export default renderTemplate;

const ListItem = ({ item, index = null }: ListItemProps) => {
  const { value } = item;

  return (
    <div className="listItemContainer">
      {index !== null && <div>{index + 1}.</div>}
      <div>{value}</div>
    </div>
  );
};
