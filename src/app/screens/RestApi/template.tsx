const renderTemplate = ({ data, changeUser }: any) => {
  const { name, id, username, email } = data || {};
  return (
    <div>
      <div>Employee Data</div>
      <input type="button" value="Another user" onClick={changeUser} />
      <div style={{ padding: 10 }}>
        <div>Name: {name}</div>
        <div>Employee id: {id}</div>
        <div>username {username}</div>
        <div> email: {email}</div>
      </div>
    </div>
  );
};

export default renderTemplate;
