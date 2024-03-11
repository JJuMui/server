export class CustomError extends Error {
  public code;
  public name;

  constructor(code: number, name: string, message: string) {
    super(JSON.stringify(message));
    this.code = code;
    this.name = name;
  }
}

export class BadRequest extends CustomError {
  constructor(message: string) {
    super(400, 'BadRequset', message);
  }
}

export class UnAuthorized extends CustomError {
  constructor(message: string) {
    super(401, 'UnAuthorized', message);
  }
}

export class Forbidden extends CustomError {
  constructor(message: string) {
    super(403, 'Forbidden', message);
  }
}

export class NotFound extends CustomError {
  constructor(message: string) {
    super(404, 'NotFound', message);
  }
}

export class InternalServerError extends CustomError {
  constructor(message: string) {
    super(500, 'InternalserverError', message);
  }
}
