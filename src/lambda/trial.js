const mongoose = require("mongoose");

function connectToDatabase() {
  console.log("=> connect to database");

  mongoose.connect("mongodb://localhost/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  let result;
  try {
    await connectToDatabase();
    const result = mongoose.connection;
    result.on("error", console.error.bind(console, "connection error:"));
    result.once("open", function () {
      console.log("=> connect to database");
    });
  } catch (error) {
    console.log("error", error);
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({
        message: error.message,
      }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: result,
    }),
  };
};
