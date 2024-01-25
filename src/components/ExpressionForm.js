
import  { useState } from "react";
import Expression from "./Expression";

const ExpressionForm = () => {
  const [connector, setConnector] = useState("and");
  const [expressions, setExpressions] = useState([
    { key: "age", output: { value: 60, operator: ">=", score: 50 } },
  ]);
  const [output, setOutput] = useState(null);

  const addExpression = () => {
    setExpressions([
      ...expressions,
      { key: "age", output: { value: "", operator: ">=", score: "" } },
    ]);
    // console.log("add expressions",expressions);
  };

  const deleteExpression = (index) => {
    const updatedExpressions = [...expressions];
    updatedExpressions.splice(index, 1);
    setExpressions(updatedExpressions);
  };

  const handleInputChange = (index, field, value) => {
    const updatedExpressions = [...expressions];

    /** Validate non-empty value */
    if (value.trim() !== "") {
      updatedExpressions[index][field] = value;
      setExpressions(updatedExpressions);
    }
  };


    const handleOutputChange = (index, outputField, value) => {
    const updatedExpressions = [...expressions];
    /** Validate numeric score*/ 
    if (!isNaN(value)) {
      updatedExpressions[index].output[outputField] = value;
      setExpressions(updatedExpressions);
    }
  };

  const generateOutput = () => {
    /** Perform additional validation if needed before setting the output state */
    const newOutput = {
      rules: expressions.map((expression) => ({
        key: expression.key,
        output: { ...expression.output },
      })),
      combinator: connector,
    };

    setOutput({ ...newOutput });
  };

  return (
    <div className="container mt-5">
      <div className="form-group mb-3" >
        <label>Connector Type:</label>
        <select
          className="form-control"
          value={connector}
          onChange={(e) => setConnector(e.target.value)}
        >
          <option value="and">AND</option>
          <option value="or">OR</option>
        </select>
      </div>

      {expressions.map((expression, index) => (
        <Expression
          key={index}
          index={index}
          expression={expression}
          onDelete={deleteExpression}
          onInputChange={handleInputChange}
          onOutputChange={handleOutputChange}
        />
      ))}

      <div className="form-group">
        <button className="btn btn-primary mr-2 " onClick={addExpression}>
          Add Expression
        </button>
        <button className="btn btn-success ml-5" onClick={generateOutput}>
          Generate Output
        </button>
      </div>

      {output && (
        <div className="output-container mt-3">
          <h4>Generated Output:</h4>
          <pre>{JSON.stringify(output, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ExpressionForm;
