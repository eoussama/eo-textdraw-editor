/**
 * @description
 * The base component
 */
export class Component {

  /**
   * @description
   * Converts the fields to props
   */
  toProps(): Object {
      const pairs = Object.entries(this);
      const output = pairs.reduce((acc, cur) => ({ ...acc, [cur[0] as any]: cur[1] }), {});
  
      return output;
  }
}