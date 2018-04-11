export class Utility {

  static toCustomSelectConverter(array) {
    const result = [];
    array.forEach(item => {
      result.push({label: item, value: item});
    });
    return result;
  }
}
