import test from "ava";

import _ from "./../lib";

// TODO implement proper tests

test(`"default" export import should be a function`, (t) => {
    t.is("function", typeof _);
});
