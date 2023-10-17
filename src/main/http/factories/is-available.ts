import { Controller } from '@/presentation/http/contracts';
import { IsAvailableController } from '@/presentation/http/controllers';

export const makeIsAvailableController = (): Controller => {
  return new IsAvailableController();
};
