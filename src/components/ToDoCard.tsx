type todoProps = {
  id: number;
  name: string;
  status: boolean;
};

const ToDoCard = ({ id, name, status }: todoProps) => {
  if (!status) {
    return (
      <div>
        <h2>
          {id}. {name} {status}
        </h2>
      </div>
    );
  }
};

export default ToDoCard;
