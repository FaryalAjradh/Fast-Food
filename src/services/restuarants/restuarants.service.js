import { mocks } from "./mock/index";
import camelize from "camelize";

export const restuarantsRequest = (location="37.7749295,-122.4194155") => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if(!mock) {
            reject("not found");
        } 
        resolve(mock);
    })
}

const restaurantsTransform = (result) => {
    const newResult = camelize(result);
    return newResult;
};

restuarantsRequest().then(restaurantsTransform)
.then((transformedResponse) => {
  console.log(transformedResponse);
}).catch((err) => {
    console.log(err)
});