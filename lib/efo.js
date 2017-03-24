import Efo from './components/Efo.html';

// Efo.valid = function (...items) {
//   if (Array.isArray(items[0])) {
//     this.valid.apply(this, items[0]);
//     return;
//   }
//
//   const results = items.reduce((result, item) => {
//     const valid = item.validate();
//     if (valid) {
//       return result;
//     }
//     result.push(item);
//     return result;
//   }, []);
//
//   if (results.length > 0) {
//     results[0].focus(() => {
//       results.forEach(efo => {
//         efo.showError();
//       });
//     });
//     return false;
//   }
//
//   return true;
// };

export default Efo;
