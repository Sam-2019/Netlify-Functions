
exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: "No worries, all is working fine!",
  });
};

// export async function handler(event, context) {
//     return {
//       statusCode: 200,
//       body: JSON.stringify({ message: `Hello world ${Math.floor(Math.random() * 10)}` })
//     };
//   }
