const mongoose = require("mongoose");

function connectionFactory() {
  const conn = mongoose.connect("mongodb://127.0.0.1:27017/noteApp", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  });

  return conn;
}

exports.handler = async (event, context) => {
  let result = "Hello";
  try {
    const db = await connectionFactory();
    console.log(db)
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
