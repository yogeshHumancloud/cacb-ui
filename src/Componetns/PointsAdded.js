import { Dialog } from "@mui/material";
import React from "react";

const PointsAdded = ({ multiPoints, onClose, onSubmit }) => {
  const [pointsList, setPointList] = useState([["", ""]]);
  return (
    <Dialog open onClose={onClose}>
      <Box>
        {multiPoints ? (
          pointsList.map((point, idx) => {
            return (
              <>
                <TextField
                  margin="normal"
                  size="medium"
                  required
                  fullWidth
                  id="Latitude"
                  label="Latitude"
                  name="Latitude"
                  value={point[0]}
                  onChange={(e) => {
                    setPointList(
                      pointsList.map((point, i) =>
                        i === idx ? [point[0], e.target.value] : point
                      )
                    );
                  }}
                />
                <TextField
                  margin="normal"
                  size="medium"
                  required
                  fullWidth
                  id="Longitude"
                  label="Longitude"
                  name="Longitude"
                  value={point[1]}
                  onChange={(e) => {
                    setPointList(
                      pointsList.map((point, i) =>
                        i === idx ? [point[1], e.target.value] : point
                      )
                    );
                  }}
                />
              </>
            );
          })
        ) : (
          <>
            <TextField
              margin="normal"
              size="medium"
              required
              fullWidth
              id="Latitude"
              label="Latitude"
              name="Latitude"
              value={fields.start_point}
              onChange={(e) => updateformData(e.target.name, e.target.value)}
            />
            <TextField
              margin="normal"
              size="medium"
              required
              fullWidth
              id="Longitude"
              label="Longitude"
              name="Longitude"
              value={fields.start_point}
              onChange={(e) => updateformData(e.target.name, e.target.value)}
            />
          </>
        )}
      </Box>
    </Dialog>
  );
};

export default PointsAdded;
