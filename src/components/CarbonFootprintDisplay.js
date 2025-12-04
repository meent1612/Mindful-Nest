import { useCarbonFootprint } from 'react-carbon-footprint';
import '../styles/CarbonFootprintDisplay.css';

const CarbonFootprintDisplay = () => {
  const [gCO2, bytesTransferred] = useCarbonFootprint();

  return (
    <div className="carbon-topbar">
      <div className="carbon-card">
        <h3>Network Carbon Footprint</h3>

        <p>
          <strong>Bytes Transferred:</strong>{" "}
          {bytesTransferred.toLocaleString()} bytes
        </p>

        <p>
          <strong>CO₂ Emissions:</strong>{" "}
          {gCO2.toFixed(2)} grams CO₂eq
        </p>

        <p className="carbon-note">
          (Estimates based on average data center efficiency and energy mix)
        </p>
      </div>
    </div>
  );
};

export default CarbonFootprintDisplay;
