import * as model from "./model";
import view from "./view/view";
const controlResults = async function () {
  try {
    model.state.query = view.getQuery();
    const results = await model.loadResults();
    view.clear();
    console.log(results);
    view.render(results);
  } catch (err) {
    console.log(err);
  }
};
// controlResults();
const init = function () {
  view.addHandler(controlResults);
};
init();
