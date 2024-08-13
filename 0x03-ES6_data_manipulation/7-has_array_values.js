/* eslint-disable array-callback return */
export default function hasValuesFromArray(set, array) {
  let test = true;
  array.map((x) => {
     if (!set.has(x)) {
	test = false;
     }
  });
  return verdict;
}
