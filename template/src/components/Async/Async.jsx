import * as React from "react";

// constants
import { IN_PROGRESS, FAILED, SUCCESS } from "src/constants/uiStates";

const Async = ({ uiState, onSuccess, onFailure, onProgress, error }) => {
  return (
    <>
      {uiState === IN_PROGRESS && onProgress()}
      {uiState === SUCCESS && onSuccess()}
      {uiState === FAILED && error && onFailure(error)}
    </>
  );
};

Async.defaultProps = {
  onProgress: () => <div>Loading...</div>,
  onFailure: error => (
    <div className="notification is-danger">
      {(error && error.message) || "Something went wrong"}
    </div>
  )
};

export default Async;
