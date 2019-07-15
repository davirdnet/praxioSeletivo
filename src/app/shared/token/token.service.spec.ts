import { TestBed } from '@angular/core/testing';

import { TokenService } from './token.service';

describe('TokenService', () => {
  let service: TokenService;

  const token =
    // tslint:disable-next-line:max-line-length
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NDE1MTkyNjQsImV4cCI6MzI0OTg4OTg0NjgsImF1ZCI6Ind3dy5leGFtcGxlLmNvbSIsInN1YiI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJHaXZlbk5hbWUiOiJKb2hubnkiLCJTdXJuYW1lIjoiUm9ja2V0IiwiRW1haWwiOiJqcm9ja2V0QGV4YW1wbGUuY29tIiwiUm9sZSI6WyJNYW5hZ2VyIiwiUHJvamVjdCBBZG1pbmlzdHJhdG9yIl19.tqOz6wHwP8Dy8gxrREFmEqQ7YMFefRzCAJaDgP4_eC8';

  const tokenExpired =
  // tslint:disable-next-line:max-line-length
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NDE1MTkyNjQsImV4cCI6OTczNTI1NjY4LCJhdWQiOiJ3d3cuZXhhbXBsZS5jb20iLCJzdWIiOiJqcm9ja2V0QGV4YW1wbGUuY29tIiwiR2l2ZW5OYW1lIjoiSm9obm55IiwiU3VybmFtZSI6IlJvY2tldCIsIkVtYWlsIjoianJvY2tldEBleGFtcGxlLmNvbSIsIlJvbGUiOlsiTWFuYWdlciIsIlByb2plY3QgQWRtaW5pc3RyYXRvciJdfQ.5RUA444r0JuC5SP2LuLP92MA1XBXVMNmP2Z_S4RcCjI';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenService]
    });
    service = TestBed.get(TokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call method setToken', () => {
    spyOn(window.localStorage, 'setItem').and.callThrough();

    service.setToken(token);

    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      'authToken',
      token
    );
  });

  it('should call method getToken', () => {
    spyOn(window.localStorage, 'getItem').and.callThrough();

    const tokenTest = service.getToken();

    expect(window.localStorage.getItem).toHaveBeenCalledWith('authToken');
    expect(tokenTest).toEqual(token);
  });

  it('should call method removeToken', () => {
    spyOn(window.localStorage, 'removeItem').and.callThrough();

    service.removeToken();

    expect(window.localStorage.removeItem).toHaveBeenCalledWith('authToken');
  });

  it('should call method hasExpired', () => {
    expect(service.hasExpired()).toBeFalsy();
  });

  it('should call method hasExpired with token expired', () => {
    spyOn(window.localStorage, 'setItem').and.callThrough();

    service.setToken(tokenExpired);

    expect(service.hasExpired()).toBeTruthy();
  });
});
