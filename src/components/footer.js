import TasksFilter from './task-filte';

export const Footer = ({ filter, onFilterChange, deleteAll, value }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{value} items left</span>
      <TasksFilter
        //  onActiveItem={onActiveItem}
        // onAllItem={onAllItem}
        // onCompletedItem={onCompletedItem}
        onFilterChange={onFilterChange}
        filter={filter}
      />
      <button className="clear-completed" onClick={deleteAll}>
        Clear completed
      </button>
    </footer>
  );
};
