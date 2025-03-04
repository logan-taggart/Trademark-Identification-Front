import React from 'react';
import ConfidenceThresholdInput from './ConfidenceThresholdInput';

// Displays the Embedding Algorithm and Confidence Threshold options for specific detection mode
const DetectionSpecificOptions = ({detectionMode, embeddingAlgorithm, setEmbeddingAlgorithm, confidenceThreshold, setConfidenceThreshold,}) => {

  return (
    <div>
      {/* The is the selection for the user to choose embedding algorithm */}
      {detectionMode === "specific" && (
        <div className="mt-6">
          <label>Embedding Algorithm:</label>
          <select
            value={embeddingAlgorithm}
            onChange={(e) => setEmbeddingAlgorithm(e.target.value)}
            className="select select-primary"
          >
            <option value="default">BEiT Embedding</option>
            <option value="alternative">CLIP Embedding</option>
          </select>
        </div>
      )}

      {/* The is the slider for the user to choose confidence threshold */}
      {detectionMode === "specific" && (
          <ConfidenceThresholdInput
            confidenceThreshold={confidenceThreshold}
            setConfidenceThreshold={setConfidenceThreshold}
          />
        )}
      
    </div>
  );
};

export default DetectionSpecificOptions;