import colors from "colors";
import server from "./server";

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(
    colors.cyan.bold(`REST API is running on http://localhost:${port}`)
  );
});

// add this
