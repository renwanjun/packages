const expect = require("chai").expect;
const assert = require("assert");
const compiler = require("./compiler.js");

describe("should works without options", () => {
  it("1 example.js", async () => {
    const stats = await compiler("example.js");
    const output = stats.toJson().modules[0].source;
    // console.log(typeof output);
    expect(output).to.equal(`async function func() {
  try {
    await new Promise((resolve, reject) => {
      reject("抛出错误");
    });
  } catch (e) {
    console.error(e);
  }
}`);
  });
});

describe("Specified identifier", () => {
  it("2 exampe.js", async () => {
    const stats = await compiler("example.js", {
      identifier: "err",
    });
    const output = stats.toJson().modules[0].source;
    console.log(output);
    expect(output).to.equal(`async function func() {
      try {
        await new Promise((resolve, reject) => {
          reject("抛出错误");
        });
      } catch (e) {
        console.error(e);
      }
    }`);
  });
});

// describe("Specified catchCode", () => {
//   it("example.js", async () => {
//     const stats = await compiler("example.js", {
//       identifier: "errObject",
//       catchCode: "console.log(errObject)",
//     });
//     const output = stats.toJson().modules[0].source;
//     expect(output).to.equal(`async function func() {
//     try {
//       await new Promise((resolve, reject) => {
//         reject("抛出错误");
//       });
//     } catch (errObject) {
//       console.log(errObject);
//     }
//   }`);
//   });
// });

// describe("Specified finallyCode", () => {
//   it("", async () => {
//     const stats = await compiler("example.js", {
//       finallyCode: 'console.log("finally");',
//     });
//     const output = stats.toJson().modules[0].source;
//     expect(output).to.equal(`async function func() {
//     try {
//       await new Promise((resolve, reject) => {
//         reject("抛出错误");
//       });
//     } catch (e) {
//       console.error(e);
//     } finally {
//       console.log("finally");
//     }
//   }`);
//   });
// });

// describe("should works on arrow function expression", () => {
//   it("", async () => {
//     const stats = await compiler("example3.js");
//     const output = stats.toJson().modules[0].source;
//     expect(output).to.equal(`const func = async () => {
//     try {
//       await new Promise((resolve, reject) => {
//         reject("抛出错误");
//       });
//     } catch (e) {
//       console.error(e);
//     }
//   };`);
//   });
// });

// describe("should works on function expression", () => {
//   it("", async () => {
//     const stats = await compiler("example5.js");
//     const output = stats.toJson().modules[0].source;
//     expect(output).to.equal(`const vueComponent = {
//     methods: {
//       func: async function () {
//         try {
//           await new Promise((resolve, reject) => {
//             reject("抛出错误");
//           });
//         } catch (e) {
//           console.error(e);
//         }
//       }
//     }
//   };`);
//   });
// });

// describe("should works on object method", () => {
//   it("", async () => {
//     const stats = await compiler("example4.js");
//     const output = stats.toJson().modules[0].source;
//     expect(output).to.equal(`const vueComponent = {
//     methods: {
//       async func() {
//         try {
//           await new Promise((resolve, reject) => {
//             reject("抛出错误");
//           });
//         } catch (e) {
//           console.error(e);
//         }
//       }
//     }
//   };`);
//   });
// });
