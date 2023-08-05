import { Grid } from "@material-ui/core";
import { Graph as ReactGraph} from "react-d3-graph";
// import {config} from "../utils/graphConfig"
const Graph = ({ graphData, graphHeader, graphConfig }) => {

  return (
    <Grid className="graph-grid" item xs={12} md={6}>
      {Object.keys(graphData).length && Object.keys(graphConfig).length ? (
        <>
          <h3>{graphHeader}</h3>
          <ReactGraph
            id="graph-id-output" // id is mandatory
            data={graphData}
            config={graphConfig}
          />
        </>
      ) : null}
    </Grid>
  );
};

export default Graph;
