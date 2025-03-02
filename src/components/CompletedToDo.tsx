type todoProps = {
  id: number;
  name: string;
  status: boolean;
};

const CompletedToDo = ({ id, name, status }: todoProps) => {
  if (status) {
    return (
      <div>
        <h2>
          {id}. {name} {status}
        </h2>
      </div>
    );
  }
};

export default CompletedToDo;
