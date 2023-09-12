import { v4 as uuid4 } from 'uuid';
import { Component } from '../component';
import { TUnsafe } from '../utils/types/generic/unsafe';
import { TClassType } from '../utils/types/generic/class';


/**
 * @description
 * The base entity
 */
export class Entity {

  /**
   * @description
   * The ID of the entity
   */
  id: string;

  /**
   * @description
   * The colelction of entities
   */
  components: Array<Component>;

  constructor(id?: string) {
    this.id = id ?? uuid4();
    this.components = [];
  }

  /**
   * @description
   * Adds a new component to the entity
   *
   * @param component The target component to add
   */
  addComponent(component: Component) {
    this.components.push(component);
  }

  /**
   * @description
   * Remove an existing component from the entity
   *
   * @param component The target component to remove
   */
  removeComponent(component: Component) {
    const index = this.components.findIndex((c) => c instanceof component.constructor);

    if (index !== -1) {
      this.components.splice(index, 1);
    }
  }

  /**
   * @description
   * Checks if entity has a component
   *
   * @param componentType The component to check
   */
  hasComponent(componentType: TClassType<Component>) {
    return Boolean(this.getComponent(componentType));
  }

  /**
   * @description
   * Retreives a component from the entity
   *
   * @param componentType The component to retreive
   */
  getComponent<T extends TClassType<Component>>(componentType: T) {
    return this.components.find(c => c instanceof componentType) as TUnsafe<InstanceType<T>>;
  }
}
