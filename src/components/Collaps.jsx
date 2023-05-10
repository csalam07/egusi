function Collaps({ id, question, answer }) {
  return (
    <div className="collapse collapse-arrow">
      <input type="checkbox" className="peer" />
      <div className="collapse-title bg-base-300 my-2 peer-checked:text-accent-focus">
        {id}. {question}
      </div>
      <div className="collapse-content bg-base-300 peer-checked:text-secondary/75">
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default Collaps;
