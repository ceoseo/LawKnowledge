import { Injectable, ValidationPipe, ValidationError } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class ValidationErrorPipe extends ValidationPipe {
  constructor() {
    super({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
      disableErrorMessages: true,
      exceptionFactory: (validationErrors: ValidationError[] = []) =>
        new RpcException(
          validationErrors.map((error) => ({
            field: error.property,
            error: Object.values(error.constraints ?? {}),
          }))
        ),
    });
  }
}