import {
  ApplicationContext,
  ApplicationKeys,
  InfraContext,
  InfraKeys,
} from '@/main/container/contracts/context';

export abstract class Container {
  protected infraContext: Map<InfraKeys, any>;
  protected applicationContext: Map<ApplicationKeys, any>;

  protected abstract buildInfraContext(): Map<InfraKeys, any>;

  protected abstract buildApplicationContext(): Map<ApplicationKeys, any>;

  resolve<T>(key: keyof InfraContext | keyof ApplicationContext): T {
    if (this.infraContext.has(key as keyof InfraContext)) {
      return this.infraContext.get(key as keyof InfraContext) as unknown as T;
    }

    if (this.applicationContext.has(key as keyof ApplicationContext)) {
      return this.applicationContext.get(
        key as keyof ApplicationContext
      ) as unknown as T;
    }

    throw new Error(`Key ${key} not found`);
  }
}
