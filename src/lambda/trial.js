const mongoose = require("mongoose");

function connectToDb() {}

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  let result;
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/noteApp", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });

    var connection = mongoose.connection;
    connection.once("open", function () {
      console.log("dB connection established successfully");
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
