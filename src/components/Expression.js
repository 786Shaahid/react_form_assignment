

const Expression = ({ index, expression, onDelete, onInputChange, onOutputChange }) => {
  return (
    <div className="card mb-3" key={index}>
      <div className="card-body">
        <button className="btn btn-danger float-right" onClick={() => onDelete(index)}>Delete</button>
        <div className="form-group">
          <label>Rule Type:</label>
          <select
            className="form-control"
            value={expression.key}
            onChange={(e) => onInputChange(index, 'key', e.target.value)}
          >
            <option value="age">Age</option>
            <option value="credit_score">Credit Score</option>
            <option value="account_balance">Account Balance</option>
          </select>
        </div>
        <div className="form-group">
          <label>Operator:</label>
          <select
            className="form-control"
            value={expression.output.operator}
            onChange={(e) => onOutputChange(index, 'operator', e.target.value)}
          >
            <option value=">">{'>'}</option>
            <option value="<">{'<'}</option>
            <option value=">=">{'>='}</option>
            <option value="<=">{'<='}</option>
            <option value="=">{'='}</option>
          </select>
        </div>
        <div className="form-group">
          <label>Value:</label>
          <input
            type="text"
            className="form-control"
            value={expression.output.value}
            onChange={(e) => onOutputChange(index, 'value', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Score:</label>
          <input
            type="text"
            className="form-control"
            value={expression.output.score}
            onChange={(e) => onOutputChange(index, 'score', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Expression;
