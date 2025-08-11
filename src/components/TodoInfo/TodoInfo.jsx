
// Add the required props
export const TodoInfo = ({ todo }) => {
  return (
    <article
      className=
        {todo.completed
          ? 'TodoInfo TodoInfo--completed'
          : 'TodoInfo TodoInfo--active'}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <a
        className="UserInfo"
        href={todo.user.email ? `mailto:${todo.user.email}` : '#'}
      >
        {todo.user.name}
      </a>
    </article>
  );
};
